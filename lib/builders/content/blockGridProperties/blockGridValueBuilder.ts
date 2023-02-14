import {BlockGridEntryBuilder} from "./blockGridEntryBuilder";
import {ContentVariantPropertyBuilder} from "../contentVariantPropertyBuilder";
import {BlockGridLayoutBuilder} from "./blockGridLayoutBuilder";

export class BlockGridValueBuilder {
  parentBuilder;
  blockGridEntryDataBuilders;
  contentDataList;
  settingDataList;
  blockGridLayoutBuilder;

  constructor(parentBuilder: ContentVariantPropertyBuilder) {
    this.parentBuilder = parentBuilder;
    this.blockGridEntryDataBuilders = [];
    this.contentDataList = [];
    this.settingDataList = [];
    this.blockGridLayoutBuilder = [];
  }

  addBlockGridEntry() {
    const builder = new BlockGridEntryBuilder(this, this.contentDataList, this.settingDataList);
    this.blockGridEntryDataBuilders.push(builder);
    return builder;
  }

  addLayout() {
    const builder = new BlockGridLayoutBuilder(this, this.contentDataList, this.settingDataList);
    this.blockGridLayoutBuilder.push(builder);
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    const content: any[] = [];
    const settings: any[] = [];

    for (let entry of this.blockGridEntryDataBuilders) {
      const buildResult = entry.build();
      if (buildResult['contentData'] !== undefined) {
        content.push(buildResult['contentData']);
      }
      if (buildResult['settingsData'] !== undefined) {
        settings.push(buildResult['settingsData']);
      }
    }

    return {
      layout: {
        'Umbraco.BlockGrid': this.blockGridLayoutBuilder.map((builder) => {
          return builder.build();
        })
      },
      contentData: content,
      settingsData: settings
    };
  }
}

  
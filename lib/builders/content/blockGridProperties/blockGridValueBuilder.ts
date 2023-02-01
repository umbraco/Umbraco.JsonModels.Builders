import {BlockGridEntryBuilder} from "./blockGridEntryBuilder";

export class BlockGridValueBuilder {
  parentBuilder;
  blockGridEntryDataBuilders;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
    this.blockGridEntryDataBuilders = [];
  }

  addBlockGridEntry() {
    const builder = new BlockGridEntryBuilder(this);
    this.blockGridEntryDataBuilders.push(builder);
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {

    const layout: any[] = [];
    const content: any[] = [];
    const settings: any[] = [];

    for (let entry of this.blockGridEntryDataBuilders) {

      const buildResult = entry.build();
      layout.push(buildResult['layout']);
      content.push(buildResult['contentData']);
      settings.push(buildResult['settingsData']);
    }

    return {
      layout: {
        'Umbraco.BlockGrid': layout
      },
      contentData: content,
      settingsData: settings
    };
  }
}

import {BlockListEntryBuilder} from "./blockListEntryBuilder";

export class BlockListValueBuilder {
  parentBuilder;
  blockListEntryDataBuilders;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
    this.blockListEntryDataBuilders = [];
  }

  addBlockListEntry() {
    const builder = new BlockListEntryBuilder(this);
    this.blockListEntryDataBuilders.push(builder);
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {

    const layout: any[] = [];
    const content: any[] = [];
    const settings: any[] = [];

    for (let entry of this.blockListEntryDataBuilders) {

      const buildResult = entry.build();
      layout.push(buildResult['layout']);
      content.push(buildResult['contentData']);
      settings.push(buildResult['settingsData']);
    }

    return {
      layout: {
        'Umbraco.BlockList': layout
      },
      contentData: content,
      settingsData: settings
    };
  }
}

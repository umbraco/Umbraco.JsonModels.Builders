import {BlockGridItemsBuilder} from "./blockGridItemsBuilder";

export class BlockGridAreaBuilder {
  key;
  parentBuilder;
  blockGridItemsBuilder;
  contentDataList;
  settingDataList;

  constructor(parentBuilder, contentDataList, settingDataList) {
    this.contentDataList = contentDataList;
    this.settingDataList = settingDataList;
    this.blockGridItemsBuilder = [];
    this.parentBuilder = parentBuilder;
  }

  withKey(key) {
    this.key = key;
    return this;
  }

  addItems(blockGridItemsBuilder?: BlockGridItemsBuilder) {
    const builder =
      blockGridItemsBuilder === null || blockGridItemsBuilder === undefined
        ? new BlockGridItemsBuilder(this, this.contentDataList, this.settingDataList)
        : blockGridItemsBuilder;
    this.blockGridItemsBuilder.push(builder);
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {

    return {
      key: this.key || null,
      items: this.blockGridItemsBuilder.map((builder) => {
        return builder.build();
      }),
    };
  }
}
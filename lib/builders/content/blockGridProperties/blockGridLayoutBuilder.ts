import {BlockGridAreaBuilder} from "./blockGridAreaBuilder";

export class BlockGridLayoutBuilder {
  rowSpan;
  columnSpan;
  contentDataList;
  settingDataList;
  parentBuilder;
  contentUdi;
  settingsUdi;
  blockGridAreaBuilder;

  constructor(parentBuilder, contentDataList, settingDataList) {
    this.contentDataList = contentDataList;
    this.settingDataList = settingDataList;
    this.parentBuilder = parentBuilder;
    this.blockGridAreaBuilder = [];
  }

  withContentUdi(contentTypeKey: string, index?) {
    const contentData: any[] = [];
    for (const contentDataElement of this.contentDataList) {
      if (contentDataElement.contentTypeKey == contentTypeKey) {
        contentData.push(contentDataElement.contentUdi);
        if (contentData.length > 1) {
          this.contentUdi = contentData[index];
        } else {
          this.contentUdi = contentData[0];
        }
      }
    }
    return this;
  }

  withSettingUdi(settingsTypeKey: string, index?) {
    const settingsData: any[] = [];
    for (const settingDataElement of this.settingDataList) {
      if (settingDataElement.settingsTypeKey == settingsTypeKey) {
        settingsData.push(settingDataElement.settingUdi);
        if (settingsData.length > 1) {
          this.settingsUdi = settingsData[index];
        } else {
          this.settingsUdi = settingsData[0];
        }
      }
    }
    return this;
  }

  addAreas() {
    const builder = new BlockGridAreaBuilder(this, this.contentDataList, this.settingDataList);
    this.blockGridAreaBuilder.push(builder);
    return builder;
  }

  withRowSpan(rowSpan: number) {
    this.rowSpan = rowSpan;
    return this;
  }

  withColumnSpan(columnSpan: number) {
    this.columnSpan = columnSpan;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      contentUdi: this.contentUdi || null,
      areas: this.blockGridAreaBuilder.map((builder) => {
        return builder.build();
      }),
      columnSpan: this.columnSpan || 12,
      rowSpan: this.rowSpan || 1
    };
  }
}
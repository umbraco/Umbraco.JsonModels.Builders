﻿import {BlockGridValueBuilder} from "./blockGridValueBuilder";
import {BlockGridImageBuilder} from "./blockGridImageBuilder";

export class BlockGridEntryBuilder {
  parentBuilder;
  contentTypeKey;
  settingsTypeKey;
  contentProperties;
  settingsProperties;
  contentUdi;
  settingUdi;
  contentDataList;
  settingDataList;
  blockGridImageBuilder;

  constructor(parentBuilder: BlockGridValueBuilder, contentDataList, settingDataList) {
    this.parentBuilder = parentBuilder;
    this.contentProperties = [];
    this.settingsProperties = [];
    this.contentDataList = contentDataList;
    this.settingDataList = settingDataList;
    this.blockGridImageBuilder = [];
  }

  withContentTypeKey(contentTypeKey: string) {
    this.contentTypeKey = contentTypeKey;
    this.contentUdi = this.getContentUdi();
    this.contentDataList.push({
      contentTypeKey: this.contentTypeKey,
      contentUdi: this.contentUdi
    });
    return this;
  }

  withSettingsTypeKey(settingsTypeKey: string) {
    this.settingsTypeKey = settingsTypeKey;
    this.settingUdi = this.getSettingUdi();
    this.settingDataList.push({
      settingsTypeKey: this.settingsTypeKey,
      settingUdi: this.settingUdi
    });
    return this;
  }

  appendContentProperties(alias: string, value: any) {
    this.contentProperties.push(
      {
        alias: alias,
        value: value
      });
    return this;
  }

  appendSettingsProperties(alias: string, value: any) {
    this.settingsProperties.push(
      {
        alias: alias,
        value: value
      });
    return this;
  }

  addImage() {
    const builder = new BlockGridImageBuilder(this);
    this.blockGridImageBuilder.push(builder);
    return builder;
  }

  buildContent() {
    if (this.contentTypeKey != null) {
      let result;
      
      if (this.blockGridImageBuilder.length > 0) {
        result = {
          contentTypeKey: this.contentTypeKey,
          udi: this.getContentUdi(),
          image: this.blockGridImageBuilder.map((builder) => {
            return builder.build();
          })
        }
      } else {
        result = {
          contentTypeKey: this.contentTypeKey,
          udi: this.getContentUdi()
        }
      }
      for (let contentProperty of this.contentProperties) {
        Object.defineProperty(result, contentProperty.alias,
          {
            value: contentProperty.value,
            configurable: true,
            writable: true,
            enumerable: true
          });
      }
      return result;
    } else {
      return undefined;
    }
  }

  buildSetting() {
    if (this.settingsTypeKey != null) {

      let result;

      if (this.blockGridImageBuilder.length > 0) {
        result = {
          contentTypeKey: this.contentTypeKey,
          udi: this.getContentUdi(),
          image: this.blockGridImageBuilder.map((builder) => {
            return builder.build();
          })
        }
      } else {
        result = {
          contentTypeKey: this.settingsTypeKey,
          udi: this.getSettingUdi()
        }
      }
      for (let settingProperty of this.settingsProperties) {
        Object.defineProperty(result, settingProperty.alias,
          {
            value: settingProperty.value,
            configurable: true,
            writable: true,
            enumerable: true
          });
      }
      return result;
    } else {
      return undefined;
    }
  }

  getContentUdi() {
    if (this.contentUdi == null) {
      this.contentUdi = this.generateUdi();
    }
    return this.contentUdi;
  }

  getSettingUdi() {
    if (this.settingUdi == null) {
      this.settingUdi = this.generateUdi();
    }
    return this.settingUdi;
  }

  generateUdi() {
    const crypto = require('crypto');
    const guid = crypto.randomUUID();
    return "umb://element/" + (guid.replace(/-/g, ""));
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      contentData: this.buildContent(),
      settingsData: this.buildSetting()
    };
  }
}
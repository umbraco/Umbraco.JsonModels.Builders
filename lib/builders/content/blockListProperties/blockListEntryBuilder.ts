export class BlockListEntryBuilder {
  parentBuilder;
  contentTypeKey;
  settingsTypeKey;
  contentProperties;
  settingsProperties;
  contentUdi;
  settingUdi;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
    this.contentProperties = [];
    this.settingsProperties = [];
  }

  withContentTypeKey(contentTypeKey: string) {
    this.contentTypeKey = contentTypeKey;
    this.contentUdi = this.getContentUdi();
    return this;
  }

  withSettingsTypeKey(settingsTypeKey: string) {
    this.settingsTypeKey = settingsTypeKey;
    this.settingUdi = this.getSettingUdi();
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

  done() {
    return this.parentBuilder;
  }

  buildContent() {
    if (this.contentTypeKey != null) {
      const result = {
        contentTypeKey: this.contentTypeKey,
        udi: this.getContentUdi()
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
      return {
        contentTypeKey: this.contentTypeKey,
        udi: this.getContentUdi()
      };
    }
  }

  buildSetting() {
    if (this.settingsTypeKey != null) {
      const result = {
        contentTypeKey: this.settingsTypeKey,
        udi: this.getSettingUdi()
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
      return {};
    }
  }

  buildLayout() {
    let result;
    if (this.contentUdi != null && this.settingUdi != null) {
      result = {
        contentUdi: this.contentUdi,
        settingsUdi: this.settingUdi
      }
    } else if (this.settingUdi != null && this.contentUdi == null) {
      result = {
        settingsUdi: this.settingUdi
      }
    } else if (this.contentUdi != null && this.settingUdi == null) {
      result = {
        contentUdi: this.contentUdi
      }
    }
    return result;
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

  build() {
    return {
      layout: this.buildLayout(),
      contentData: this.buildContent(),
      settingsData: this.buildSetting()
    }
  }
}
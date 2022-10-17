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
    return this;
  }

  withSettingsTypeKey(settingsTypeKey: string) {
    this.settingsTypeKey = settingsTypeKey;
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
    const result = {
      contentTypeKey: this.contentTypeKey || null,
      udi: this.getContentUdi()
    }
    
    for (const contentProperty in this.contentProperties) {
      Object.defineProperty(result, contentProperty['alias'],
        {
          value: contentProperty['value'],
          configurable: true,
          writable: true,
          enumerable: true
        });
    }
    return result;
  }

  buildSetting() {

    let result;
    
    if(this.settingsTypeKey != null) {
      result = {

        contentTypeKey: this.settingsTypeKey || null,
        udi: this.getSettingUdi()
      }

      for (const settingProperty in this.settingsProperties) {
        Object.defineProperty(result, settingProperty['alias'],
          {
            value: settingProperty['value'],
            configurable: true,
            writable: true,
            enumerable: true
          });
      }
    }
    
    return result;
  }

  buildLayout() {
    return {
      'Umbraco.BlockList': {
        contentUdi: this.contentUdi || null,
        settingsUdi: this.settingUdi || null
      },
      // contentUdi: this.getContentUdi(),
      // settingsUdi: this.getSettingUdi()
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

  build() {
    return {
      layout: this.buildLayout(),
      contentData: this.buildContent(),
      settingsData: this.buildSetting()
    }
  }
}
import {DataTypeBuilder} from "./dataTypeBuilder";

export class RadioboxDataTypeBuilder extends DataTypeBuilder {
  items: string[];

  constructor() {
    super();
    this.editorAlias = "Umbraco.RadioButtonList";
    this.editorUiAlias = "Umb.PropertyEditorUi.RadioButtonList";
  }

  withItems(values: string[]) {
    this.items = values;
    return this;
  }

  getValues() {
    let values: any[] = [];

    if (this.items && this.items.length > 0) {
      values.push({
        alias: "items",
        value: this.items
      });
    }
    return values;
  }
}
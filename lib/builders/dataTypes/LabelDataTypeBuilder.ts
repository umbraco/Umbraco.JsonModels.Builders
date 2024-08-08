import {DataTypeBuilder} from "./dataTypeBuilder";

export class LabelDataTypeBuilder extends DataTypeBuilder {
  value: string;

  constructor() {
    super();
    this.editorAlias = "Umbraco.Label";
    this.editorUiAlias = "Umb.PropertyEditorUi.Label";
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  getValues() {
    let values: any = [];
    values.push({
      alias: "umbracoDataValueType",
      value: this.value || "STRING"
    });
    return values;
  }
}
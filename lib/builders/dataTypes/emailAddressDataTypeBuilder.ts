import {DataTypeBuilder} from "./dataTypeBuilder";

export class EmailAddressDataTypeBuilder extends DataTypeBuilder {
  inputType: string;

  constructor() {
    super();
    this.editorAlias = "Umbraco.EmailAddress";
    this.editorUiAlias = "Umb.PropertyEditorUi.EmailAddress";
  }

  withInputType(inputType: string) {
    this.inputType = inputType;
    return this;
  }

  getValues() {
    let values: any = [];
    values.push({
      alias: 'inputType',
      value: this.inputType || 'email'
    });
    return values;
  }
}
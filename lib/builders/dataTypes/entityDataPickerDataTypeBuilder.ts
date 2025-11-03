import {DataTypeBuilder} from "./dataTypeBuilder";

export class EntityDataPickerDataTypeBuilder extends DataTypeBuilder {
  dataSource: string;

  constructor() {
    super();
    this.editorAlias = "Umbraco.EntityDataPicker";
    this.editorUiAlias = "Umb.PropertyEditorUi.EntityDataPicker";
  }

  withDataSource(dataSource: string) {
    this.dataSource = dataSource;
    return this;
  }

  getValues() {
    let values: any = [];
    values.push({
      alias: 'umbEditorDataSource',
      value: this.dataSource
    });
    return values;
  }
}
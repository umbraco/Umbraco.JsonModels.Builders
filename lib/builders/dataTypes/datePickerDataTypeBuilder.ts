import {DataTypeBuilder} from "./dataTypeBuilder";

export class DatePickerDataTypeBuilder extends DataTypeBuilder {
  offsetTime: boolean;
  format: string;

  constructor() {
    super();
    this.propertyEditorAlias = "Umbraco.DateTime";
    this.propertyEditorUiAlias = "";
  }

  toOffsetTime(offsetTime: boolean) {
    this.offsetTime = offsetTime;
    return this;
  }

  withFormat(format: string) {
    this.format = format;
    return this;
  }

  getValues() {
    let values: any = [];
    values.push({
      alias: "offsetTime",
      value: this.offsetTime || false
    });
    values.push({
      alias: "format",
      value: this.format || "YYYY-MM-DD"
    });
    return values;
  }
}
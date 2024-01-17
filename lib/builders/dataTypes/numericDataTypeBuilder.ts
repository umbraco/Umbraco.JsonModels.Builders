import {DataTypeBuilder} from "./dataTypeBuilder";

export class NumericDataTypeBuilder extends DataTypeBuilder {
  min: number;
  max: number;
  step: number;
  allowDecimals: boolean;

  constructor() {
    super();
    this.editorAlias = "Umbraco.Integer";
    this.editorUiAlias = "Umb.PropertyEditorUi.Integer";
  }

  withMin(min: number) {
    this.min = min;
    return this;
  }

  withMax(max: number) {
    this.max = max;
    return this;
  }

  withStep(step: number) {
    this.step = step;
    return this;
  }

  withAllowDecimals(allowDecimals: boolean) {
    this.allowDecimals = allowDecimals;
    return this;
  }

  getValues() {
    let values: any = [];
    values.push({
      alias: "min",
      value: this.min || 0
    });
    values.push({
      alias: "max",
      value: this.max ||0
    });
    values.push({
      alias: "step",
      value: this.step || 0
    });
    values.push({
      alias: "allowDecimals",
      value: this.allowDecimals || false
    });
    return values;
  }
}
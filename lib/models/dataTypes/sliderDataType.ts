import {DataType} from './dataType';
import {DataTypePrevalue} from "./dataTypePrevalue";

export class SliderDataType extends DataType {
  constructor() {
    super();
    this.selectedEditor = 'Umbraco.Slider';
  }

  public addPrevalues(values: DataTypePrevalue[]) {
    this.preValues = values;
  }
}
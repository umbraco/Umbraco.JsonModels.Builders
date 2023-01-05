import {DataType} from './dataType';
import {DataTypePrevalue} from './dataTypePrevalue';

export class BlockGridDataType extends DataType {
  constructor() {
    super();
    this.selectedEditor = 'Umbraco.BlockGrid';
  }

  public addPrevalues(values: DataTypePrevalue[]) {
    this.preValues = values;
  }
}

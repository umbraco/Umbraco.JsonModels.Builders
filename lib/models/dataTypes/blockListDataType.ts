import {DataType} from './dataType';
import {DataTypePrevalue} from './dataTypePrevalue';

export class BlockListDataType extends DataType {
  constructor() {
    super();
    this.selectedEditor = 'Umbraco.BlockList';
  }

  public addPrevalues(values: DataTypePrevalue[]) {
    this.preValues = values;
  }
}

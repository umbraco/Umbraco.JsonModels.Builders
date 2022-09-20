import { DataTypeBuilder } from './dataTypeBuilder';
import { TextBoxDataType } from '../../models';

export class TextBoxDataTypeBuilder extends DataTypeBuilder {
  constructor(private textBoxDataType: TextBoxDataType = new TextBoxDataType()) {
    super(textBoxDataType);
  }
  withMaxChars(chars: number) {
    this.textBoxDataType.addPrevalues(chars);
    return this;
  }
}

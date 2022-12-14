import { DataTypeBuilder } from './dataTypeBuilder';
import { LabelDataType } from '../../models';

export class LabelDataTypeBuilder extends DataTypeBuilder {
  constructor(private labelDataType: LabelDataType = new LabelDataType()) {
    super(labelDataType);
    this.withStringValueType();
  }

  withStringValueType() {
    return this.withValueType('STRING');
  }

  withDecimalValueType() {
    return this.withValueType('DECIMAL');
  }

  withDateTimeValueType() {
    return this.withValueType('DATETIME');
  }

  withTimeValueType() {
    return this.withValueType('TIME');
  }

  withIntegerValueType() {
    return this.withValueType('INT');
  }

  withBigIntegerValueType() {
    return this.withValueType('BIGINT');
  }

  withLongStringValueType() {
    return this.withValueType('TEXT');
  }

  withValueType(type) {
    this.labelDataType.addPrevalues(type);
    return this;
  }
}

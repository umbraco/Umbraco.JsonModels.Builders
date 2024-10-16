import * as camelize from 'camelize';

export class DocumentTypePropertyBuilder {
  parentBuilder;
  alias;
  value;
  allowCultureVariant;
  dataTypeId;
  label;
  sortOrder;
  validation;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withDataTypeId(dataTypeId) {
    this.dataTypeId = dataTypeId;
    return this;
  }
  withLabel(label) {
    this.label = label;
    return this;
  }
  withAlias(alias) {
    this.alias = alias;
    return this;
  }
  withValue(value) {
    this.value = value;
    return this;
  }
  withCultureVariant(allowCultureVariant){
    this.allowCultureVariant = allowCultureVariant;
    return this;
  }
  done() {
    return this.parentBuilder;
  }

  build() {
    const crypto = require('crypto');
    const label = this.label || crypto.randomUUID();
    const alias = this.alias || 'a' + camelize(label);

    return {
      alias,
      value: this.value || '',
      allowCultureVariant: this.allowCultureVariant || false,
      dataTypeId: this.dataTypeId || -1,
      label,
      sortOrder: this.sortOrder || 0,
      validation: this.validation || { mandatory: false, pattern: null },
    };
  }
}

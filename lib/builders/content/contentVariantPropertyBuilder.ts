import {BlockListValueBuilder} from "./blockListProperties";

export class ContentVariantPropertyBuilder {
  parentBuilder;
  blockListValueBuilder;

  id;
  alias;
  value;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withAlias(alias) {
    this.alias = alias;
    return this;
  }

  withValue(value) {
    this.value = value;
    return this;
  }

  addBlockListValue() {
    const builder = new BlockListValueBuilder(this);

    this.blockListValueBuilder = builder;

    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {

    let value = null;

    if (this.value != null) {
      value = this.value;
    } else {
      value = this.blockListValueBuilder.build();
    }

    return {
      id: this.id || 0,
      alias: this.alias || null,
      value: value || null,
    };
  }
}

import {BlockListValueBuilder} from "./blockListProperties";
import {BlockGridValueBuilder} from "./blockGridProperties";
import {ContentVariantBuilder} from "./contentVariantBuilder";

export class ContentVariantPropertyBuilder {
  parentBuilder;
  blockListValueBuilder;
  blockGridValueBuilder;
  id;
  alias;
  value;

  constructor(parentBuilder: ContentVariantBuilder) {
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

  addBlockGridValue() {
    const builder = new BlockGridValueBuilder(this);

    this.blockGridValueBuilder = builder;
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

      if (this.blockListValueBuilder != null) {
        value = this.blockListValueBuilder.build();
      } else if (this.blockGridValueBuilder != null) {
        value = this.blockGridValueBuilder.build();
      }
    }

    return {
      id: this.id || 0,
      alias: this.alias || null,
      value: value || null,
    };
  }
}

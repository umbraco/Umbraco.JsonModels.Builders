import {BlockListValueBuilder} from "./blockListValueBuilder";

export class BlockListPropertyBuilder {
  parentBuilder;
  id;
  alias;
  blockListValueBuilder;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }

  addValue() {
    const builder = new BlockListValueBuilder(this);

    this.blockListValueBuilder = builder;

    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      id: this.id || 0,
      alias: this.alias || null,
      value: this.blockListValueBuilder.build()
    };
  }
}
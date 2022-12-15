import {BlockGridDataTypeBuilder} from "../blockGridDataTypeBuilder";

export class BlockGridBlockGroupBuilder {
  parentBuilder
  key;
  name;

  constructor(parentBuilder: BlockGridDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    const crypto = require('crypto');

    if (this.key == null) {
      this.key = crypto.randomUUID();
    }

    return {
      key: this.key,
      name: this.name || null
    };
  }
}
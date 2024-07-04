import {BlockGridDataTypeBuilder} from "../blockGridDataTypeBuilder";

export class BlockGridBlockGroupBuilder {
  parentBuilder: BlockGridDataTypeBuilder;
  key: string;
  name: string;

  constructor(parentBuilder: BlockGridDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValues() {
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
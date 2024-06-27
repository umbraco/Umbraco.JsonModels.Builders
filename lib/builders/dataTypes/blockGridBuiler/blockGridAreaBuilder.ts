import {BlockGridSpecifiedAllowanceBuilder} from "./blockGridSpecifiedAllowanceBuilder";
import {BlockGridBlockBuilder} from "./blockGridBlockBuilder";

export class BlockGridAreaBuilder {
  parentBuilder: BlockGridBlockBuilder;
  key: string;
  alias: string;
  columnSpan: number;
  rowSpan: number;
  minAllowed: number;
  maxAllowed: number;
  blockGridSpecifiedAllowanceBuilder: BlockGridSpecifiedAllowanceBuilder[];
  createLabel: string;

  constructor(parentBuilder: BlockGridBlockBuilder) {
    this.parentBuilder = parentBuilder;
    this.blockGridSpecifiedAllowanceBuilder = [];
  }

  withKey(key: string) {
    this.key = key;
    return this;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }

  withColumnSpan(columnSpan: number) {
    this.columnSpan = columnSpan;
    return this;
  }

  withRowSpan(rowSpan: number) {
    this.rowSpan = rowSpan;
    return this;
  }

  withMinAllowed(minAllowed: number) {
    this.minAllowed = minAllowed;
    return this;
  }

  withMaxAllowed(maxAllowed: number) {
    this.maxAllowed = maxAllowed;
    return this;
  }

  addSpecifiedAllowance(blockGridSpecifiedAllowanceBuilder?: BlockGridSpecifiedAllowanceBuilder) {
    const builder =
      blockGridSpecifiedAllowanceBuilder === null || blockGridSpecifiedAllowanceBuilder === undefined
        ? new BlockGridSpecifiedAllowanceBuilder(this)
        : blockGridSpecifiedAllowanceBuilder;
    this.blockGridSpecifiedAllowanceBuilder.push(builder);
    return builder;
  }

  withCreateLabel(createLabel: string) {
    this.createLabel = createLabel;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValues() {
    let values: any[] = [];

    if (this.key == null) {
      const crypto = require('crypto');
      this.key = crypto.randomUUID();
    }
    values.push({key: this.key});

    if (this.alias !== undefined) {
      values.push({alias: this.alias});
    }

    if (this.columnSpan !== undefined) {
      values.push({columnSpan: this.columnSpan});
    }

    if (this.rowSpan !== undefined) {
      values.push({rowSpan: this.rowSpan});
    }

    if (this.minAllowed !== undefined) {
      values.push({minAllowed: this.minAllowed});
    }

    if (this.maxAllowed !== undefined) {
      values.push({maxAllowed: this.maxAllowed});
    }

    if (this.createLabel !== undefined) {
      values.push({createLabel: this.createLabel});
    }

    if (this.blockGridSpecifiedAllowanceBuilder.length > 0) {
      values.push({
        specifiedAllowances: this.blockGridSpecifiedAllowanceBuilder.map((builder) => {
          return builder.getValues();
        })
      });
    }

    return values;
  }
}
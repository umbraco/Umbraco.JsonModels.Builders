import {BlockGridSpecifiedAllowanceBuilder} from "./blockGridSpecifiedAllowanceBuilder";
import {BlockGridBlocksBuilder} from "./blockGridBlocksBuilder";

export class BlockGridAreasBuilder {
  parentBuilder;
  key;
  alias;
  columnSpan;
  rowSpan;
  minAllowed;
  maxAllowed;
  blockGridSpecifiedAllowanceBuilder;
  createLabel;

  constructor(parentBuilder: BlockGridBlocksBuilder) {
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

  build() {
    const crypto = require('crypto');
    this.key = crypto.randomUUID();

    return {
      key: this.key || null,
      alias: this.alias || "",
      columnSpan: this.columnSpan || null,
      rowSpan: this.rowSpan || null,
      minAllowed: this.minAllowed || null,
      maxAllowed: this.maxAllowed || null,
      specifiedAllowance: this.blockGridSpecifiedAllowanceBuilder.map((builder) => {
        return builder.build();
      }),
      createLabel: this.createLabel || null
    };
  }
}
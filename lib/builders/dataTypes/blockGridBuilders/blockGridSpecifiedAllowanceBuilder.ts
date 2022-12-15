import {BlockGridDataTypeBuilder} from "../blockGridDataTypeBuilder";

export class BlockGridSpecifiedAllowanceBuilder {
  parentBuilder;
  elementTypeKey;
  groupKey;
  minAllowed;
  maxAllowed;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withElementTypeKey(elementTypeKey: string) {
    this.elementTypeKey = elementTypeKey;
    return this;
  }

  withGroupName(groupName: string) {
    const blockGridDataTypeBuilder = new BlockGridDataTypeBuilder();
    this.groupKey = blockGridDataTypeBuilder.getBlockGroupGUID(groupName);
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

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      elementTypeKey: this.elementTypeKey || null,
      groupKey: this.groupKey || null,
      minAllowed: this.minAllowed || null,
      maxAllowed: this.maxAllowed || null
    };
  }
}
export class BlockGridSpecifiedAllowanceBuilder {
  parentBuilder;
  elementTypeKey;
  groupKey;
  min;
  max;
  minAllowed;
  maxAllowed;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withElementTypeKey(elementTypeKey: string) {
    this.elementTypeKey = elementTypeKey;
    return this;
  }

  withGroupKey(groupKey: string) {
    this.groupKey = groupKey;
    return this;
  }

  withMin(min: number) {
    this.min = min;
    return this;
  }

  withMax(max: number) {
    this.max = max;
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
      min: this.min || 0,
      max: this.max || 0,
      minAllowed: this.minAllowed || null,
      maxAllowed: this.maxAllowed || null
    };
  }
}
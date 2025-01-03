import {BlockListValueBuilder} from "./blockListValueBuilder";

export class BlockListExposeBuilder {
  parentBuilder: BlockListValueBuilder;
  contentKey: string;
  culture: string;
  segment: string;

  constructor(parentBuilder: BlockListValueBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withContentKey(contentKey: string) {
    this.contentKey = contentKey;
    return this;
  }
  
  withCulture(culture: string) {
    this.culture = culture;
    return this;
  }

  withSegment(segment: string) {
    this.segment = segment;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValue() {
    return {
      contentKey: this.contentKey,
      culture: this.culture || null,
      segment: this.segment || null,
    };
  }
}
import {BlockGridValueBuilder} from "./blockGridValueBuilder";

export class BlockGridExposeBuilder {
  parentBuilder: BlockGridValueBuilder;
  contentKey: string;
  culture: string;
  segment: string;

  constructor(parentBuilder: BlockGridValueBuilder) {
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
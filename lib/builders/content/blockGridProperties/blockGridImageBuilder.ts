import {BlockGridEntryBuilder} from "./blockGridEntryBuilder";

export class BlockGridImageBuilder {

  parentBuilder;
  mediaKey;
  crops;
  left;
  top;

  constructor(parentBuilder: BlockGridEntryBuilder) {
    this.crops = [];
    this.parentBuilder = parentBuilder;
  }

  withMediaKey(mediaKey: string) {
    this.mediaKey = mediaKey;
    return this;
  }

  withLeftFocalPoint(leftFocalPoint: number) {
    this.left = leftFocalPoint;
    return this;
  }

  withTopFocalPoint(topFocalPoint: number) {
    this.top = topFocalPoint;
    return this
  }

  done() {
    return this.parentBuilder;
  }

  generateUdi() {
    const crypto = require('crypto');
    return crypto.randomUUID();
  }
  
  build() {

    return {
      key: this.generateUdi() || null,
      mediaKey: this.mediaKey || null,
      crops: [],
      focalPoint: {
        left: this.left || 0.5,
        top: this.top || 0.5
      },
    }
  }
}
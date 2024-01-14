import {MediaTypeBuilder} from "./mediaTypeBuilder";

export class MediaTypeCompositionBuilder {
  parentBuilder: MediaTypeBuilder;
  id: string
  compositionType: string;

  constructor(parentBuilder: MediaTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withCompositionType(compositionType: string) {
    this.compositionType = compositionType;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      id: this.id || null,
      compositionType: this.compositionType || "Composition"
    };
  }
}
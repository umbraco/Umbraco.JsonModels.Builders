import {MediaBuilder} from "./mediaBuilder";
import {MediaValueDataBuilder} from "./mediaValueDataBuilder";

export class MediaValueBuilder {
  parentBuilder: MediaBuilder;
  culture: string;
  segment: string;
  alias: string;
  editorAlias: string;
  mediaValueData: MediaValueDataBuilder;

  constructor(parentBuilder: MediaBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withCulture(culture: string) {
    this.culture = culture;
    return this;
  }

  withSegment(segment: string) {
    this.segment = segment;
    return this;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }

  withEditorAlias(editorAlias: string) {
    this.editorAlias = editorAlias;
    return this;
  }

  addValueEntry() {
    const builder = new MediaValueDataBuilder(this);
    this.mediaValueData = builder;
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      culture: this.culture || null,
      segment: this.segment || null,
      alias: this.alias || null,
      editorAlias: this.editorAlias || null,
      value: this.mediaValueData.getValue() || null
    };
  }
}
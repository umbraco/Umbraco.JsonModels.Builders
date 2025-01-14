import {MediaBuilder} from "./mediaBuilder";
import {MediaValueEntryBuilder} from "./mediaValueEntryBuilder";

export class MediaValueBuilder {
  parentBuilder: MediaBuilder;
  culture: string;
  segment: string;
  alias: string;
  editorAlias: string;
  mediaValueEntry: MediaValueEntryBuilder;

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
    const builder = new MediaValueEntryBuilder(this);
    this.mediaValueEntry = builder;
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
      value: this.mediaValueEntry.getValue() || null
    };
  }
}
import {BlockListContentDataBuilder} from "./blockListContentDataBuilder";

export class ContentDataValueBuilder {
  parentBuilder: BlockListContentDataBuilder;
  alias: string;
  culture: string;
  editorAlias: string;
  segment: string;
  value: string;

  constructor(parentBuilder: BlockListContentDataBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }
  
  withCulture(culture: string) {
    this.culture = culture;
    return this;
  }

  withEditorAlias(editorAlias: string) {
    this.editorAlias = editorAlias;
    return this;
  }

  withSegment(segment: string) {
    this.segment = segment;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValue() {
    return {
      alias: this.alias,
      culture: this.culture || null,
      editorAlias: this.editorAlias,
      segment: this.segment || null,
      value: this.value || ""
    };
  }
}
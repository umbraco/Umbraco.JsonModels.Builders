import {DocumentBuilder} from "./documentBuilder";

export class DocumentValueBuilder {
  parentBuilder : DocumentBuilder;
  culture : string;
  segment : string;
  alias : string;
  value : string;

  constructor(parentBuilder : DocumentBuilder) {
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
  
  withValue(value: string) {
    this.value = value;
    return this;
  }
  
  done() {
    return this.parentBuilder;
  }
  
  build() {
    return {
      culture: this.culture || null,
      segment: this.segment || null,
      alias: this.alias || null,
      value: this.value || null
    }
  };
}
import {DictionaryBuilder} from "./dictionaryBuilder";

export class DictionaryTranslationBuilder {
  isoCode: string;
  translation: string;
  parentBuilder: DictionaryBuilder;

  constructor(parentBuilder: DictionaryBuilder) {
    this.parentBuilder = parentBuilder
  }

  withIsoCode(isoCode: string) {
    this.isoCode = isoCode;
    return this;
  }

  withTranslation(translation: string) {
    this.translation = translation;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      isoCode: this.isoCode || "",
      translation: this.translation || ""
    }
  }
}
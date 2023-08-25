import {DictionaryTranslationBuilder} from "./dictionaryTranslationBuilder";

export class DictionaryBuilder {
  name: string;
  parentId: string;
  dictionaryTranslationBuilder;

  constructor() {
    this.dictionaryTranslationBuilder = [];
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  addTranslation() {
    const builder = new DictionaryTranslationBuilder(this);
    this.dictionaryTranslationBuilder.push(builder);
    return builder;
  }
  
  withParentId(parentId: string) {
    this.parentId = parentId;
    return this;
  }

  build() {
    return {
      name: this.name || undefined,
      translations: this.dictionaryTranslationBuilder.map(builder => {
        return builder.build();
      }),
      parentId: this.parentId || undefined
    }
  }
}
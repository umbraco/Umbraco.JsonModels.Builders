import {ContentVariantPropertyBuilder} from './contentVariantPropertyBuilder';
import {ContentBuilder} from "./contentBuilder";

export class ContentVariantBuilder {
  parentBuilder;
  id;
  name;
  culture;
  publish;
  save;
  releaseDate;
  expireDate;

  contentVariantPropertyBuilders;

  constructor(parentBuilder: ContentBuilder) {
    this.parentBuilder = parentBuilder;
    this.contentVariantPropertyBuilders = [];
  }

  addProperty() {
    const builder = new ContentVariantPropertyBuilder(this);

    this.contentVariantPropertyBuilders.push(builder);

    return builder;
  }
  
  withCulture(culture) {
    this.culture = culture;
    return this;
  }

  withPublish(publish) {
    this.publish = publish;
    return this;
  }

  withSave(save) {
    this.save = save;
    return this;
  }

  withName(name) {
    this.name = name;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    const crypto = require('crypto');
    const name = this.name || crypto.randomUUID();

    return {
      name,
      id: this.id || 0,
      properties: this.contentVariantPropertyBuilders.map((builder) => {
        return builder.build();
      }),
      culture: this.culture || null,
      publish: this.publish || false,
      save: this.save || false,
      releaseDate: this.releaseDate || null,
      expireDate: this.expireDate || null,
    };
  }
}

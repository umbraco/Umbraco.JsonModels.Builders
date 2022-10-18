import * as faker from 'faker';
import {ContentVariantPropertyBuilder} from './contentVariantPropertyBuilder';
import {BlockListPropertyBuilder} from "./blockListProperties";

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
  blockListTypePropertyBuilder;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
    this.contentVariantPropertyBuilders = [];
    this.blockListTypePropertyBuilder = [];
  }

  addProperty() {
    const builder = new ContentVariantPropertyBuilder(this);

    this.contentVariantPropertyBuilders.push(builder);

    return builder;
  }

  addBlockListProperty() {
    const builder = new BlockListPropertyBuilder(this);

    this.blockListTypePropertyBuilder.push(builder);

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
    const name = this.name || faker.random.uuid();

    let properties = null;

    if (this.contentVariantPropertyBuilders.length > 0) {
      properties = this.contentVariantPropertyBuilders.map((builder) => {
        return builder.build();
      });
    } else {
      properties = this.blockListTypePropertyBuilder.map((builder) => {
        return builder.build();
      });
    }

    return {
      name,
      id: this.id || 0,
      properties: properties,
      culture: this.culture || null,
      publish: this.publish || false,
      save: this.save || false,
      releaseDate: this.releaseDate || null,
      expireDate: this.expireDate || null,
    };
  }
}

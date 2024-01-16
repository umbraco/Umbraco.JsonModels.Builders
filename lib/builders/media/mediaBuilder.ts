import {MediaValueBuilder} from "./mediaValueBuilder";
import {MediaVariantBuilder} from "./mediaVariantBuilder";

export class MediaBuilder {
  documentValueBuilder: MediaValueBuilder[];
  documentVariantBuilder: MediaVariantBuilder[];
  id: string;
  parentId: string;
  contentTypeId: string;

  constructor() {
    this.documentValueBuilder = [];
    this.documentVariantBuilder = [];
  }

  addValue() {
    const builder = new MediaValueBuilder(this);
    this.documentValueBuilder.push(builder);
    return builder;
  }

  addVariant() {
    const builder = new MediaVariantBuilder(this);
    this.documentVariantBuilder.push(builder);
    return builder;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withParentId(parentId: string) {
    this.parentId = parentId;
    return this;
  }

  withContentTypeId(contentTypeId: string) {
    this.contentTypeId = contentTypeId;
    return this;
  }

  build() {
    if (this.id == null) {
      const crypto = require('crypto');
      this.id = crypto.randomUUID();
    }

    return {
      id: this.id,
      parentId: this.parentId || null,
      contentTypeId: this.contentTypeId || null,
      values: this.documentValueBuilder.map((builder) => {
        return builder.build()
      }),
      variants: this.documentVariantBuilder.map((builder) => {
        return builder.build();
      })
    };
  }
}
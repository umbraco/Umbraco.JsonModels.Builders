import {DocumentValueBuilder} from "./documentValueBuilder";
import {DocumentVariantBuilder} from "./documentVariantBuilder";

export class DocumentBuilder {
  documentValueBuilder: DocumentValueBuilder[];
  documentVariantBuilder: DocumentVariantBuilder[];
  id: string;
  parentId: string;
  contentTypeId: string;
  templateId: string;

  constructor() {
    this.documentValueBuilder = [];
    this.documentVariantBuilder = [];
  }

  addValue() {
    const builder = new DocumentValueBuilder(this);
    this.documentValueBuilder.push(builder);
    return builder;
  }

  addVariant() {
    const builder = new DocumentVariantBuilder(this);
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

  withTemplateId(templateId: string) {
    this.templateId = templateId;
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
      templateId: this.templateId || null,
      values: this.documentValueBuilder.map((builder) => {
        return builder.build()
      }),
      variants: this.documentVariantBuilder.map((builder) => {
        return builder.build();
      })
    };
  }
}
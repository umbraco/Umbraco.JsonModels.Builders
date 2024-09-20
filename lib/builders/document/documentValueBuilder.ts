﻿import {DocumentBuilder} from "./documentBuilder";
import {MediaPickerValueBuilder} from "./mediaPickerValueBuilder";
import {URLPickerValueBuilder} from "./urlPickerValueBuilder";

export class DocumentValueBuilder {
  parentBuilder: DocumentBuilder;
  culture: string;
  segment: string;
  alias: string;
  value: string | string[];
  mediaPickerValueBuilder: MediaPickerValueBuilder[];
  urlPickerValueBuilder: URLPickerValueBuilder[];
  temporaryFileId: string;

  constructor(parentBuilder: DocumentBuilder) {
    this.parentBuilder = parentBuilder;
    this.mediaPickerValueBuilder = [];
    this.urlPickerValueBuilder = [];
  }

  withCulture(culture: any) {
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

  withValue(value: any) {
    this.value = value;
    return this;
  }

  withTemporaryFileId(temporaryFileId: string) {
    this.temporaryFileId = temporaryFileId;
    return this;
  }

  addMediaPickerValue() {
    const builder = new MediaPickerValueBuilder(this);
    this.mediaPickerValueBuilder.push(builder);
    return builder;
  }

  addURLPickerValue() {
    const builder = new URLPickerValueBuilder(this);
    this.urlPickerValueBuilder.push(builder);
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    let value: any = null;

    if (this.value != null) {
      value = this.value;
    } else {
      if (this.mediaPickerValueBuilder && this.mediaPickerValueBuilder.length > 0) {
        value = this.mediaPickerValueBuilder.map((builder) => {
          return builder.getValue();
        })
      }
      if (this.urlPickerValueBuilder && this.urlPickerValueBuilder.length > 0) {
        value = this.urlPickerValueBuilder.map((builder) => {
          return builder.getValue();
        })
      }
      if (this.temporaryFileId !== undefined) {
        value = {temporaryFileId: this.temporaryFileId};
      }
    }

    return {
      culture: this.culture || null,
      segment: this.segment || null,
      alias: this.alias || null,
      value: value || null
    }
  };
}
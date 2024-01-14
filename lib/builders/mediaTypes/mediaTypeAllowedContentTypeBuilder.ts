﻿import {MediaTypeBuilder} from "./mediaTypeBuilder";

export class MediaTypeAllowedContentTypeBuilder {
  parentBuilder: MediaTypeBuilder;
  id: string;
  sortOrder: number;

  constructor(parentBuilder: MediaTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withSortOrder(sortOrder: number) {
    this.sortOrder = sortOrder;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      id: this.id || null,
      sortOrder: this.sortOrder || 0
    };
  }
}
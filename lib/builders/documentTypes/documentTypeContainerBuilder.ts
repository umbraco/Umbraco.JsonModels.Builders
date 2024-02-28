﻿import {DocumentTypeBuilder} from "./documentTypeBuilder";

export class DocumentTypeContainerBuilder {
  parentBuilder: DocumentTypeBuilder;
  id: string;
  parentId: string;
  name: string;
  type: string;
  sortOrder: number;
  parentObject: any;

  constructor(parentBuilder: DocumentTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withParentId(parentId: string) {
    this.parentId = parentId;
    return this;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  withType(type: string) {
    this.type = type;
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
    this.parentObject = this.parentId ? {id: this.parentId} : null;

    return {
      id: this.id || null,
      parent: this.parentObject,
      name: this.name || "",
      type: this.type || "Group",
      sortOrder: this.sortOrder || 0
    };
  }
}

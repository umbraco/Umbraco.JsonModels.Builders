﻿import {MemberTypeBuilder} from "./memberTypeBuilder";

export class MemberTypeContainerBuilder {
  parentBuilder: MemberTypeBuilder;
  id: string;
  parentId: string;
  name: string;
  type: string;
  sortOrder: number;

  constructor(parentBuilder: MemberTypeBuilder) {
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
    return {
      id: this.id || null,     
      parent: this.parentId ? {id: this.parentId} : null,
      name: this.name || "",
      type: this.type || "Group",
      sortOrder: this.sortOrder || 0
    };
  }
}
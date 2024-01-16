﻿export abstract class DataTypeBuilder {
  id: string;
  parentId: string;
  name: string;
  editorAlias: string;
  editorUiAlias: string;

  withName(name: string) {
    this.name = name;
    return this;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withParentId(parentId: string) {
    this.parentId = parentId;
    return this;
  }

  build() {
    if (this.id == null) {
      const crypto = require('crypto');
      this.id = crypto.randomUUID();
    }
    return {
      editorAlias: this.editorAlias,
      editorUiAlias: this.editorUiAlias,
      id: this.id,
      name: this.name,
      parentId: this.parentId,
      values: this.getValues()
    }
  };

  abstract getValues();
}
export abstract class DataTypeBuilder {
  $type = "DataTypeResponseModel";
  id: string;
  parentId: string;
  name: string;
  propertyEditorAlias: string;
  propertyEditorUiAlias: string;

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
      $type: this.$type,
      id: this.id,
      parentId: this.parentId,
      name: this.name,
      propertyEditorAlias: this.propertyEditorAlias,
      propertyEditorUiAlias: this.propertyEditorUiAlias,
      values: this.getValues()
    }
  };

  abstract getValues();
}
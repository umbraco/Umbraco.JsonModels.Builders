import {ListViewDataTypeBuilder} from "../listViewDataTypeBuilder";

export class ListViewPropertyBuilder {
  parentBuilder: ListViewDataTypeBuilder;
  alias: string;
  header: string;
  nameTemplate: string;

  constructor(parentBuilder: ListViewDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }

  withHeader(header: string) {
    this.header = header;
    return this;
  }

  withNameTemplate(nameTemplate: string) {
    this.nameTemplate = nameTemplate;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValues() {
    return {
      alias: this.alias || "sortOrder",
      header: this.header || "Sort",
      nameTemplate: this.nameTemplate || null
    };
  }
}
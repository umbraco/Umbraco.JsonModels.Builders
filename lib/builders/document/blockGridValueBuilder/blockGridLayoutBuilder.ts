import {BlockGridValueBuilder} from "./blockGridValueBuilder";

export class BlockGridLayoutBuilder {
  parentBuilder: BlockGridValueBuilder;
  columnSpan: number;
  contentKey: string;
  contentUdi: string;
  rowSpan: number;
  settingsKey: string;
  settingsUdi: string;

  constructor(parentBuilder: BlockGridValueBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withColumnSpan(columnSpan: number) {
    this.columnSpan = columnSpan;
    return this;
  }

  withContentKey(contentKey: string) {
    this.contentKey = contentKey;
    return this;
  }

  withContentUdi(contentUdi: string) {
    this.contentUdi = contentUdi;
    return this;
  }

  withRowSpan(rowSpan: number) {
    this.rowSpan = rowSpan;
    return this;
  }

  withSettingsUdi(settingsUdi: string) {
    this.settingsUdi = settingsUdi;
    return this;
  }

  withSettingsKey(settingsKey: string) {
    this.settingsKey = settingsKey;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValue() {
    return {
      $type: 'BlockGridLayoutItem',
      areas: [],
      columnSpan: this.columnSpan || 12,
      contentKey: this.contentKey,
      contentUdi: this.contentUdi || null,
      rowSpan: this.rowSpan || 1,
      settingsKey: this.settingsKey || null,
      settingsUdi: this.settingsUdi || null
    };
  }
}
import {BlockListDataTypeBuilder} from "../blockListDataTypeBuilder";

export enum EditorSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Full = "Full"
}

export class BlockListBlockBuilder {
  parentBuilder: BlockListDataTypeBuilder;
  contentElementTypeKey: string;
  label: string;
  editorSize : EditorSize;
  settingsElementTypeKey: string;
  backgroundColor: string;
  iconColor: string;
  stylesheet: string[];

  constructor(parentBuilder: BlockListDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
    this.stylesheet = [];
  }

  withContentElementTypeKey(contentElementTypeKey: string) {
    this.contentElementTypeKey = contentElementTypeKey;
    return this;
  }

  withLabel(label: string) {
    this.label = label;
    return this;
  }

  withEditorSize(editorSize: EditorSize) {
    this.editorSize = editorSize;
    return this;
  }

  withSettingsElementTypeKey(settingsElementTypeKey: string) {
    this.settingsElementTypeKey = settingsElementTypeKey;
    return this;
  }

  withBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
    return this;
  }

  withIconColor(iconColor: string) {
    this.iconColor = iconColor;
    return this;
  }

  withStylesheet(stylesheet: string) {
    this.stylesheet.push(stylesheet);
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValues() {
    let values: any = [];

      values.push({
        alias: "contentElementTypeKey",
        value: this.contentElementTypeKey || ""
      });

    if (this.label) {
      values.push({
        alias: "label",
        value: this.label
      });
    }

    if (this.editorSize) {
      values.push({
        alias: "editorSize",
        value: this.editorSize
      });
    }

    if (this.settingsElementTypeKey) {
      values.push({
        alias: "settingsElementTypeKey",
        value: this.settingsElementTypeKey
      });
    }

    if (this.backgroundColor) {
      values.push({
        alias: "backgroundColor",
        value: this.backgroundColor
      });
    }

    if (this.iconColor) {
      values.push({
        alias: "iconColor",
        value: this.iconColor
      });
    }

    if (this.stylesheet.length > 0) {
      values.push({
        alias: "stylesheet",
        value: this.stylesheet
      });
    }

    return values;
  }

}
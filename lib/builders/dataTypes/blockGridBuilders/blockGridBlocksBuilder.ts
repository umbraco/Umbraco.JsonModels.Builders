import {BlockGridDataTypeBuilder} from "../blockGridDataTypeBuilder";
import {BlockGridAreasBuilder} from "./blockGridAreasBuilder";

export class BlockGridBlocksBuilder {
  parentBuilder;
  columnSpanOptions;
  allowAtRoot;
  allowInAreas;
  rowMinSpan;
  rowMaxSpan;
  areaGridColumns;
  blockGridAreasBuilder;
  backgroundColor;
  iconColor;
  thumbnail;
  contentElementTypeKey;
  settingsElementTypeKey;
  view;
  stylesheet;
  label;
  editorSize;
  forceHideContentEditorInOverlay;
  groupKey;
  inlineEditing;

  constructor(parentBuilder: BlockGridDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
    this.blockGridAreasBuilder = [];
    this.columnSpanOptions = [];
  }

  addColumnSpanOptions(columnSpan: number) {
    this.columnSpanOptions.push(
      {
        "columnSpan": columnSpan
      });
    return this;
  }

  withAllowAtRoot(allowAtRoot: boolean) {
    this.allowAtRoot = allowAtRoot;
    return this;
  }

  withAllowInAreas(allowInAreas: boolean) {
    this.allowInAreas = allowInAreas;
    return this;
  }

  withRowMinSpan(rowMinSpan: number) {
    this.rowMinSpan = rowMinSpan;
    return this;
  }

  withRowMaxSpan(rowMaxSpan: number) {
    this.rowMaxSpan = rowMaxSpan;
    return this;
  }

  withAreaGridColumns(areaGridColumns: number) {
    this.areaGridColumns = areaGridColumns;
    return this;
  }

  addArea() {
    const builder = new BlockGridAreasBuilder(this);
    this.blockGridAreasBuilder.push(builder);
    return builder;
  }

  withBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
    return this;
  }

  withIconColor(iconColor: string) {
    this.iconColor = iconColor;
    return this;
  }

  withThumbnail(thumbnail: string) {
    this.thumbnail = thumbnail;
    return this;
  }

  withContentElementTypeKey(contentElementTypeKey: string) {
    this.contentElementTypeKey = contentElementTypeKey;
    return this;
  }

  withSettingsElementTypeKey(settingsElementTypeKey: string) {
    this.settingsElementTypeKey = settingsElementTypeKey;
    return this;
  }

  withView(view: string) {
    this.view = view;
    return this;
  }

  withStylesheet(stylesheet: string) {
    this.stylesheet = stylesheet;
    return this;
  }

  withLabel(label: string) {
    this.label = label;
    return this;
  }

  withEditorSize(editorSize: string) {
    this.editorSize = editorSize;
    return this;
  }

  withForceHideContentEditorInOverlay(forceHideContentEditorInOverlay: boolean) {
    this.forceHideContentEditorInOverlay = forceHideContentEditorInOverlay;
    return this;
  }

  withGroupName(groupName: string) {
    this.groupKey = this.parentBuilder.getBlockGroupGUID(groupName);
    return this;
  }
  
  withInlineEditing(inlineEditing: boolean){
    this.inlineEditing = inlineEditing;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    // Need to have this if otherwise it will always return true even though it is false
    if (this.allowAtRoot == null) {
      this.allowAtRoot = true;
    }

    if (this.allowInAreas == null) {
      this.allowInAreas = true;
    }

    return {
      columnSpanOptions: this.columnSpanOptions || null,
      allowAtRoot: this.allowAtRoot,
      allowInAreas: this.allowInAreas,
      rowMinSpan: this.rowMinSpan || 1,
      rowMaxSpan: this.rowMaxSpan || 1,
      areaGridColumns: this.areaGridColumns || 12,
      areas: this.blockGridAreasBuilder.map((builder) => {
        return builder.build();
      }) || null,
      backgroundColor: this.backgroundColor || null,
      iconColor: this.iconColor || null,
      thumbnail: this.thumbnail || null,
      contentElementTypeKey: this.contentElementTypeKey,
      settingsElementTypeKey: this.settingsElementTypeKey || null,
      view: this.view || null,
      stylesheet: this.stylesheet || null,
      label: this.label || "",
      editorSize: this.editorSize || "medium",
      inlineEditing: this.inlineEditing || false,
      forceHideContentEditorInOverlay: this.forceHideContentEditorInOverlay || false,
      groupKey: this.groupKey || null
    };
  }
}
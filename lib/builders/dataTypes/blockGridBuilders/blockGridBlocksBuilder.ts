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

  constructor(parentBuilder: BlockGridDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
    this.columnSpanOptions = [];
  }

  addColumnSpanOptions(columnSpan: number) {
    this.columnSpanOptions.map(
      {
        columnSpan: columnSpan
      });
    return this;
  }

  //
  // withColumnSpanOptions(columnSpanOptions){
  //   this.columnSpanOptions = columnSpanOptions;
  //   return this;
  // }

  withAllowAtRoot(allowAtRoot) {
    this.allowAtRoot = allowAtRoot;
    return this;
  }

  withAllowInAreas(allowInAreas) {
    this.allowInAreas = allowInAreas;
    return this;
  }

  withRowMinSpan(rowMinSpan) {
    this.rowMinSpan = rowMinSpan;
    return this;
  }

  withRowMaxSpan(rowMaxSpan) {
    this.rowMaxSpan = rowMaxSpan;
    return this;
  }

  withAreaGridColumns(areaGridColumns) {
    this.areaGridColumns = areaGridColumns;
    return this;
  }

  addArea() {
    // this.parentBuilder.getGroupKey(groupName)
    const builder = new BlockGridAreasBuilder(this);

    this.blockGridAreasBuilder = builder;

    return builder;
  }

  withBackgroundColor(backgroundColor) {
    this.backgroundColor = backgroundColor;
    return this;
  }

  withIconColor(iconColor) {
    this.iconColor = iconColor;
    return this;
  }

  withThumbnail(thumbnail) {
    this.thumbnail = thumbnail;
    return this;
  }

  withContentElementTypeKey(contentElementTypeKey) {
    this.contentElementTypeKey = contentElementTypeKey;
    return this;
  }

  withSettingsElementTypeKey(settingsElementTypeKey) {
    this.settingsElementTypeKey = settingsElementTypeKey;
    return this;
  }

  withView(view) {
    this.view = view;
    return this;
  }

  withStylesheet(stylesheet) {
    this.stylesheet = stylesheet;
    return this;
  }

  withLabel(label) {
    this.label = label;
    return this;
  }

  withEditorSize(editorSize) {
    this.editorSize = editorSize;
    return this;
  }

  withForceHideContentEditorInOverlay(forceHideContentEditorInOverlay) {
    this.forceHideContentEditorInOverlay = forceHideContentEditorInOverlay;
    return this;
  }

  // It should create a GUID
  withGroupName(groupName){
    this.groupKey = this.parentBuilder.getBlockGroupGUID(groupName);
    // console.log(this.parentBuilder.getBlockGroupGUID(groupName));
    console.log(this.groupKey);
    return this;
  }
  
  // withGroupKey(groupKey) {
  //   this.parentBuilder.
  //   this.groupKey = groupKey;
  //   return this;
  // }

  done() {
    return this.parentBuilder;
  }

  build() {

    let area = null;

    if (this.blockGridAreasBuilder != null) {
      area = this.blockGridAreasBuilder.build();
    }
    
    return {
      columnSpanOptions: this.columnSpanOptions || null,
      allowAtRoot: this.allowAtRoot || true,
      allowInAreas: this.allowInAreas || true,
      rowMinSpan: this.rowMinSpan || 1,
      rowMaxSpan: this.rowMaxSpan || 1,
      areaGridColumns: this.areaGridColumns || null,
      areas: area,
      backgroundColor: this.backgroundColor || null,
      iconColor: this.iconColor || null,
      thumbnail: this.thumbnail || null,
      contentElementTypeKey: this.contentElementTypeKey || null,
      settingsElementTypeKey: this.settingsElementTypeKey || null,
      view: this.view || null,
      stylesheet: this.stylesheet || null,
      label: this.label || "",
      editorSize: this.editorSize || "medium",
      forceHideContentEditorInOverlay: this.forceHideContentEditorInOverlay || false,
      groupKey: this.groupKey || null
    };
  }
}
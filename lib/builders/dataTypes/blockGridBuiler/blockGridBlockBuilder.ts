import {BlockGridDataTypeBuilder} from "../blockGridDataTypeBuilder";
import {BlockGridAreaBuilder} from "./blockGridAreaBuilder";

export class BlockGridBlockBuilder {
  parentBuilder: BlockGridDataTypeBuilder;
  contentElementTypeKey: string;
  label: string;
  settingsElementTypeKey: string;
  allowAtRoot: boolean;
  allowInAreas: boolean;
  columnsSpanOptions: number[];
  minRowSpan: number;
  maxRowSpan: number;
  editorSize: string;
  useInlineEditing: boolean;
  useHideContentEditor: boolean;
  backgroundColor: string;
  iconColor: string;
  thumbnail: string;
  stylesheet: string;
  view: string;
  groupKey: string;
  blockGridAreasBuilder: BlockGridAreaBuilder[];
  areaGridColumns: number;

  constructor(parentBuilder: BlockGridDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
    this.blockGridAreasBuilder = [];
    this.columnsSpanOptions = [];
  }

  withContentElementTypeKey(contentElementTypeKey: string) {
    this.contentElementTypeKey = contentElementTypeKey;
    return this;
  }

  withLabel(label: string) {
    this.label = label;
    return this;
  }

  withSettingsElementTypeKey(settingsElementTypeKey: string) {
    this.settingsElementTypeKey = settingsElementTypeKey;
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

  addColumnSpanOptions(columnSpan: number) {
    this.columnsSpanOptions.push(columnSpan);
    return this;
  }

  withMinRowSpan(minRowSpan: number) {
    this.minRowSpan = minRowSpan;
    return this;
  }

  withMaxRowSpan(maxRowSpan: number) {
    this.maxRowSpan = maxRowSpan;
    return this;
  }

  withEditorSize(editorSize: string) {
    this.editorSize = editorSize;
    return this;
  }

  withUseInlineEditing(useInlineEditing: boolean) {
    this.useInlineEditing = useInlineEditing;
    return this;
  }

  withUseHideContentEditor(useHideContentEditor: boolean) {
    this.useHideContentEditor = useHideContentEditor;
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

  withThumbnail(thumbnail: string) {
    this.thumbnail = thumbnail;
    return this;
  }

  withStylesheet(stylesheet: string) {
    this.stylesheet = stylesheet;
    return this;
  }

  withView(view: string) {
    this.view = view;
    return this;
  }

  withGroupName(groupName: string) {
    this.groupKey = this.parentBuilder.getBlockGroupGUID(groupName);
    return this;
  }

  addArea() {
    const builder = new BlockGridAreaBuilder(this);
    this.blockGridAreasBuilder.push(builder);
    return builder;
  }

  withAreaGridColumns(areaGridColumns: number) {
    this.areaGridColumns = areaGridColumns;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValues() {
    let values: any = {};

    if (this.contentElementTypeKey) {
      values.contentElementTypeKey = this.contentElementTypeKey;
    }

    if (this.label) {
      values.label = this.label;
    }

    if (this.settingsElementTypeKey) {
      values.settingsElementTypeKey = this.settingsElementTypeKey;
    }

    if (this.allowAtRoot) {
      values.allowAtRoot = this.allowAtRoot;
    }

    if (this.allowInAreas) {
      values.allowInAreas = this.allowInAreas;
    }

    if (this.columnsSpanOptions.length > 0) {
      values.columnsSpanOptions = this.columnsSpanOptions;
    }

    if (this.minRowSpan) {
      values.minRowSpan = this.minRowSpan;
    }

    if (this.maxRowSpan) {
      values.maxRowSpan = this.maxRowSpan;
    }

    if (this.editorSize) {
      values.editorSize = this.editorSize;
    }

    if (this.useInlineEditing) {
      values.useInlineEditing = this.useInlineEditing;
    }

    if (this.useHideContentEditor) {
      values.useHideContentEditor = this.useHideContentEditor;
    }

    if (this.backgroundColor) {
      values.backgroundColor = this.backgroundColor;
    }

    if (this.iconColor) {
      values.iconColor = this.iconColor;
    }

    if (this.thumbnail) {
      values.thumbnail = this.thumbnail;
    }

    if (this.stylesheet) {
      values.stylesheet = this.stylesheet;
    }

    if (this.view) {
      values.view = this.view;
    }

    if (this.groupKey) {
      values.groupKey = this.groupKey;
    }

    if (this.blockGridAreasBuilder.length > 0) {
      values.areas = this.blockGridAreasBuilder.map((builder) => builder.getValues());
    }

    if (this.areaGridColumns) {
      values.areaGridColumns = this.areaGridColumns;
    }

    return values;
  }

}
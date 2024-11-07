import {DataTypeBuilder} from "../dataTypeBuilder";
import {RichTextEditorToolbarBuilder} from "./richTextEditorToolbarBuilder";

export class RichTextEditorDataTypeBuilder extends DataTypeBuilder {
  richTextEditorToolbarBuilder: RichTextEditorToolbarBuilder;
  maxImageSize: number;
  editorModel: string;
  stylesheets: string[] = [];
  dimensionsWidth: number;
  dimensionsHeight: number;
  overlaySize: string;
  hideLabel: boolean;
  mediaParentId: string;
  ignoreUserStartNodes: boolean;
  blocks: {contentElementTypeKey: string}[] = [];

  constructor() {
    super();
    this.editorAlias = "Umbraco.RichText";
    this.editorUiAlias = "Umb.PropertyEditorUi.TinyMCE";
  }

  addToolbar() {
    const builder = new RichTextEditorToolbarBuilder(this);
    this.richTextEditorToolbarBuilder = builder;
    return builder;
  }

  withMaxImageSize(maxImageSize: number) {
    this.maxImageSize = maxImageSize;
    return this;
  }

  withEditorModel(editorModel: any) {
    this.editorModel = editorModel;
    return this;
  }

  addStylesheet(stylesheet: string) {
    this.stylesheets.push(stylesheet);
    return this;
  }

  withDimensions(width: number, height: number) {
    this.dimensionsWidth = width;
    this.dimensionsHeight = height;
    return this;
  }

  withOverlaySize(size: string) {
    this.overlaySize = size;
    return this;
  }

  withHideLabel(hideLabel: boolean) {
    this.hideLabel = hideLabel;
    return this;
  }

  withMediaFolderParentId(mediaParentId: string) {
    this.mediaParentId = mediaParentId;
    return this;
  }

  withIgnoreUserStartNodes(ignoreUserStartNodes: boolean) {
    this.ignoreUserStartNodes = ignoreUserStartNodes;
    return this;
  }

  addBlock(contentElementTypeKey: string) {
    this.blocks.push({contentElementTypeKey});
    return this;
  }

  getValues() {
    let values: any[] = [];

    if (this.richTextEditorToolbarBuilder) {
      values.push({
        alias: "toolbar",
        value: this.richTextEditorToolbarBuilder.build()
      });
    }

    if (this.maxImageSize) {
      values.push({
        alias: "maxImageSize",
        value: this.maxImageSize
      });
    }

    if (this.editorModel) {
      values.push({
        alias: "editor",
        value: this.editorModel
      });
    }

    if (this.stylesheets.length > 0) {
      values.push({
        alias: "stylesheets",
        value: this.stylesheets
      });
    }

    if (this.dimensionsWidth && this.dimensionsHeight) {
      values.push({
        alias: "dimensions",
        value: {
          width: this.dimensionsWidth,
          height: this.dimensionsHeight
        }
      });
    }

    if (this.overlaySize) {
      values.push({
        alias: "overlaySize",
        value: this.overlaySize
      });
    }

    if (this.hideLabel) {
      values.push({
        alias: "hideLabel",
        value: this.hideLabel
      });
    }

    if (this.mediaParentId) {
      values.push({
        alias: "mediaParentId",
        value: this.mediaParentId
      });
    }

    if (this.ignoreUserStartNodes) {
      values.push({
        alias: "ignoreUserStartNodes",
        value: this.ignoreUserStartNodes
      });
    }

    if (this.blocks.length > 0) {
      values.push({
        alias: "blocks",
        value: this.blocks
      });
    }

    return values;
  }
}
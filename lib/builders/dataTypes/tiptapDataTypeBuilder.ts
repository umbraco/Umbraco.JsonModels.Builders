import {DataTypeBuilder} from "./dataTypeBuilder";

export class TiptapDataTypeBuilder extends DataTypeBuilder {
  maxImageSize: number;
  overlaySize: string;
  dimensionsWidth: number;
  dimensionsHeight: number;
  ignoreUserStartNodes: boolean;
  blocks: {contentElementTypeKey: string}[] = [];
  mediaParentId: string;
  extensions: string[];
  toolbar: string[][][];

  constructor() {
    super();
    this.editorAlias = "Umbraco.RichText";
    this.editorUiAlias = "Umb.PropertyEditorUi.Tiptap";
  }

  withMaxImageSize(maxImageSize: number) {
    this.maxImageSize = maxImageSize;
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

  addExtension(extension: string) {
    this.extensions.push(extension);
    return this;
  }

  addToolbar(toolbar: string[][]) {
    this.toolbar.push(toolbar);
    return this;
  }

  getValues() {
    let values: any[] = [];

    values.push({
      alias: "maxImageSize",
      value: this.maxImageSize ? this.maxImageSize : 500
    });

    if (this.dimensionsWidth && this.dimensionsHeight) {
      values.push({
        alias: "dimensions",
        value: {
          width: this.dimensionsWidth,
          height: this.dimensionsHeight
        }
      });
    }

    values.push({
      alias: "overlaySize",
      value: this.overlaySize ? this.overlaySize : "medium"
    });

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

    const defaultExtensions = [
      "Umb.Tiptap.Block",
      "Umb.Tiptap.Embed",
      "Umb.Tiptap.Figure",
      "Umb.Tiptap.Image",
      "Umb.Tiptap.Link",
      "Umb.Tiptap.MediaUpload",
      "Umb.Tiptap.Subscript",
      "Umb.Tiptap.Superscript",
      "Umb.Tiptap.Table",
      "Umb.Tiptap.TextAlign",
      "Umb.Tiptap.Underline",
    ];
    values.push({
      alias: "extensions",
      value: this.extensions ? this.extensions : defaultExtensions
    });

    const defaultToolbar = [
      [
        ["Umb.Tiptap.Toolbar.SourceEditor"],
        [
          "Umb.Tiptap.Toolbar.Bold",
          "Umb.Tiptap.Toolbar.Italic",
          "Umb.Tiptap.Toolbar.Underline",
        ],
        [
          "Umb.Tiptap.Toolbar.TextAlignLeft",
          "Umb.Tiptap.Toolbar.TextAlignCenter",
          "Umb.Tiptap.Toolbar.TextAlignRight",
        ],
        ["Umb.Tiptap.Toolbar.BulletList", "Umb.Tiptap.Toolbar.OrderedList"],
        ["Umb.Tiptap.Toolbar.Blockquote", "Umb.Tiptap.Toolbar.HorizontalRule"],
        ["Umb.Tiptap.Toolbar.Link", "Umb.Tiptap.Toolbar.Unlink"],
        ["Umb.Tiptap.Toolbar.MediaPicker", "Umb.Tiptap.Toolbar.EmbeddedMedia"],
      ],
    ];
    values.push({
      alias: "toolbar",
      value: this.toolbar ? this.toolbar : defaultToolbar
    });

    return values;
  }
}
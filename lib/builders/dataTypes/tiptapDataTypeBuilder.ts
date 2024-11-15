import {DataTypeBuilder} from "./dataTypeBuilder";
import {TiptapExtensionBuilder, TiptapToolbarRowBuilder} from "./tiptapBuilder";

export class TiptapDataTypeBuilder extends DataTypeBuilder {
  maxImageSize: number;
  overlaySize: string;
  dimensionsWidth: number;
  dimensionsHeight: number;
  ignoreUserStartNodes: boolean;
  blocks: {contentElementTypeKey: string}[] = [];
  mediaParentId: string;
  tiptapExtensionBuilder: TiptapExtensionBuilder;
  tiptapToolbarRowBuilder: TiptapToolbarRowBuilder[];

  constructor() {
    super();
    this.editorAlias = "Umbraco.RichText";
    this.editorUiAlias = "Umb.PropertyEditorUi.Tiptap";
    this.tiptapToolbarRowBuilder = [];
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

  addExtension() {
    const builder = new TiptapExtensionBuilder(this);
    this.tiptapExtensionBuilder = builder;
    return builder;
  }

  addToolbarRow() { 
    const builder = new TiptapToolbarRowBuilder(this); 
    this.tiptapToolbarRowBuilder.push(builder); 
    return builder; 
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
      "Umb.Tiptap.Blockquote",
      "Umb.Tiptap.Bold",
      "Umb.Tiptap.CodeBlock",
      "Umb.Tiptap.Embed",
      "Umb.Tiptap.Figure",
      "Umb.Tiptap.Heading",
      "Umb.Tiptap.HorizontalRule",
      "Umb.Tiptap.Image",
      "Umb.Tiptap.Italic",
      "Umb.Tiptap.Link",
      "Umb.Tiptap.List",
      "Umb.Tiptap.MediaUpload",
      "Umb.Tiptap.Strike",
      "Umb.Tiptap.Subscript",
      "Umb.Tiptap.Superscript",
      "Umb.Tiptap.Table",
      "Umb.Tiptap.TextAlign",
      "Umb.Tiptap.Underline"
    ];
    values.push({
      alias: "extensions",
      value: this.tiptapExtensionBuilder ? this.tiptapExtensionBuilder.build() : defaultExtensions
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
      value:
        this.tiptapToolbarRowBuilder.length > 0
          ? this.tiptapToolbarRowBuilder.map(builder => builder.build())
          : defaultToolbar,
    });

    return values;
  }
}
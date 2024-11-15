import {TiptapToolbarRowBuilder} from "./tiptapToolbarRowBuilder";

export class TiptapToolbarGroupBuilder {
  parentBuilder: TiptapToolbarRowBuilder;
  toolbarValues: {[key: string]: boolean} = {};

  constructor(parentBuilder: TiptapToolbarRowBuilder) {
    this.parentBuilder = parentBuilder;
    this.toolbarValues = {};
  }

  withSourceEditor(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.SourceEditor'] = value;
    return this;
  }

  withBold(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Bold'] = value;
    return this;
  }

  withItalic(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Italic'] = value;
    return this;
  }

  withUnderline(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Underline'] = value;
    return this;
  }

  withTextAlignLeft(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.TextAlignLeft'] = value;
    return this;
  }

  withTextAlignCenter(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.TextAlignCenter'] = value;
    return this;
  }

  withBulletList(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.BulletList'] = value;
    return this;
  }

  withOrderedList(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.OrderedList'] = value;
    return this;
  }

  withBlockquote(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Blockquote'] = value;
    return this;
  }

  withHorizontalRule(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.HorizontalRule'] = value;
    return this;
  }

  withLink(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Link'] = value;
    return this;
  }

  withUnlink(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Unlink'] = value;
    return this;
  }

  withMediaPicker(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.MediaPicker'] = value;
    return this;
  }

  withEmbeddedMedia(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.EmbeddedMedia'] = value;
    return this;
  }

  withStrike(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Strike'] = value;
    return this;
  }

  withClearFormatting(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.ClearFormatting'] = value;
    return this;
  }
  
  withTextAlignJustify(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.TextAlignJustify'] = value;
    return this;
  }

  withHeading1(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Heading1'] = value;
    return this;
  }

  withHeading2(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Heading2'] = value;
    return this;
  }

  withHeading3(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Heading3'] = value;
    return this;
  }

  withCodeBlock(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.CodeBlock'] = value;
    return this;
  }
  
  withSubscript(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Subscript'] = value;
    return this;
  }

  withSuperscript(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Superscript'] = value;
    return this;
  }

  withUndo(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Undo'] = value;
    return this;
  }
  
  withRedo(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Redo'] = value;
    return this;
  }
  
  withTable(value: boolean) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Table'] = value;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return Object.keys(this.toolbarValues).filter(key => this.toolbarValues[key]);
  }
}

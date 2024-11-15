import {TiptapDataTypeBuilder} from "../tiptapDataTypeBuilder";

export class TiptapToolbarBuilder {
  parentBuilder: TiptapDataTypeBuilder;
  toolbarValues: {[key: string]: {value: boolean; row: number}};

  constructor(parentBuilder: TiptapDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
    this.toolbarValues = {};
  }

  withSourceEditor(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.SourceEditor'] = {value, row};
    return this;
  }

  withBold(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Bold'] = {value, row};
    return this;
  }

  withItalic(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Italic'] = {value, row};
    return this;
  }

  withUnderline(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Underline'] = {value, row};
    return this;
  }

  withTextAlignLeft(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.TextAlignLeft'] = {value, row};
    return this;
  }

  withTextAlignCenter(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.TextAlignCenter'] = {value, row};
    return this;
  }

  withBulletList(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.BulletList'] = {value, row};
    return this;
  }

  withOrderedList(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.OrderedList'] = {value, row};
    return this;
  }

  withBlockquote(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Blockquote'] = {value, row};
    return this;
  }

  withHorizontalRule(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.HorizontalRule'] = {value, row};
    return this;
  }

  withLink(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Link'] = {value, row};
    return this;
  }

  withUnlink(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Unlink'] = {value, row};
    return this;
  }

  withMediaPicker(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.MediaPicker'] = {value, row};
    return this;
  }

  withEmbeddedMedia(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.EmbeddedMedia'] = {value, row};
    return this;
  }

  withStrike(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Strike'] = {value, row};
    return this;
  }

  withClearFormatting(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.ClearFormatting'] = {value, row};
    return this;
  }
  
  withTextAlignJustify(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.TextAlignJustify'] = {value, row};
    return this;
  }

  withHeading1(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Heading1'] = {value, row};
    return this;
  }

  withHeading2(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Heading2'] = {value, row};
    return this;
  }

  withHeading3(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Heading3'] = {value, row};
    return this;
  }

  withCodeBlock(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.CodeBlock'] = {value, row};
    return this;
  }
  
  withSubscript(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Subscript'] = {value, row};
    return this;
  }

  withSuperscript(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Superscript'] = {value, row};
    return this;
  }

  withUndo(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Undo'] = {value, row};
    return this;
  }
  
  withRedo(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Redo'] = {value, row};
    return this;
  }
  
  withTable(value: boolean, row: number) {
    this.toolbarValues['Umb.Tiptap.Toolbar.Table'] = {value, row};
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    const groups = {};

    for (const [key, {value, row}] of Object.entries(this.toolbarValues)) {
      if (value) {
        if (!groups[row]) {
          groups[row] = [];
        }
        groups[row].push(key);
      }
    } 
    return Object.values(groups).map(groupItem => [groupItem]);
  }
}

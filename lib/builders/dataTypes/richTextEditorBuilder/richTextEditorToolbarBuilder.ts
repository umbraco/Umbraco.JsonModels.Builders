import {RichTextEditorDataTypeBuilder} from "./richTextEditorDataTypeBuilder";

export class RichTextEditorToolbarBuilder {
  parentBuilder;
  undo: boolean;
  redo: boolean;
  cut: boolean;
  copy: boolean;
  paste: boolean;
  styles: boolean;
  fontname: boolean;
  fontsize: boolean;
  backcolor: boolean
  blockquote: boolean;
  formatquote: boolean;
  removeformat: boolean;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  alignleft: boolean;
  aligncenter: boolean;
  alignright: boolean;
  alignjustify: boolean;
  bullist: boolean;
  numlist: boolean;
  outdent: boolean;
  indent: boolean;
  anchor: boolean;
  table: boolean;
  hr: boolean;
  subscript: boolean;
  superscript: boolean;
  charmap: boolean;
  rtl: boolean;
  ltr: boolean;
  sourcecode: boolean;
  umbmediapicker: boolean;
  umbembeddialog: boolean;
  link: boolean;
  unlink: boolean;
  umbblockpicker: boolean;

  constructor(parentBuilder: RichTextEditorDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withUndo(undo: boolean) {
    this.undo = undo;
    return this;
  }

  withRedo(redo: boolean) {
    this.redo = redo;
    return this;
  }

  withCut(cut: boolean) {
    this.cut = cut;
    return this;
  }

  withCopy(copy: boolean) {
    this.copy = copy;
    return this;
  }

  withPaste(paste: boolean) {
    this.paste = paste;
    return this;
  }

  withStyles(styles: boolean) {
    this.styles = styles;
    return this;
  }

  withFontname(fontname: boolean) {
    this.fontname = fontname;
    return this;
  }

  withFontsize(fontsize: boolean) {
    this.fontsize = fontsize;
    return this;
  }

  withBackcolor(backcolor: boolean) {
    this.backcolor = backcolor;
    return this;
  }

  withBlockQuote(blockquote: boolean) {
    this.blockquote = blockquote;
    return this;
  }

  withFormatQuote(formatquote: boolean) {
    this.formatquote = formatquote;
    return this;
  }

  withRemoveFormat(removeformat: boolean) {
    this.removeformat = removeformat;
    return this;
  }

  withBold(bold: boolean) {
    this.bold = bold;
    return this;
  }

  withItalic(italic: boolean) {
    this.italic = italic;
    return this;
  }

  withUnderline(underline: boolean) {
    this.underline = underline;
    return this;
  }

  withStrikeThrough(strikethrough: boolean) {
    this.strikethrough = strikethrough;
    return this;
  }

  withAlignLeft(alignleft: boolean) {
    this.alignleft = alignleft;
    return this;
  }

  withAlignCenter(aligncenter: boolean) {
    this.aligncenter = aligncenter;
    return this;
  }

  withAlignRight(alignright: boolean) {
    this.alignright = alignright;
    return this;
  }

  withAlignJustify(alignjustify: boolean) {
    this.alignjustify = alignjustify;
    return this;
  }

  withBulList(bullist: boolean) {
    this.bullist = bullist;
    return this;
  }

  withNumList(numlist: boolean) {
    this.numlist = numlist;
    return this;
  }

  withOutdent(outdent: boolean) {
    this.outdent = outdent;
    return this;
  }

  withIndent(indent: boolean) {
    this.indent = indent;
    return this;
  }

  withAnchor(anchor: boolean) {
    this.anchor = anchor;
    return this;
  }

  withTable(table: boolean) {
    this.table = table;
    return this;
  }

  withHr(hr: boolean) {
    this.hr = hr;
    return this;
  }

  withSubscript(subscript: boolean) {
    this.subscript = subscript;
    return this;
  }

  withSuperScript(superscript: boolean) {
    this.superscript = superscript;
    return this;
  }

  withCharMap(charmap: boolean) {
    this.charmap = charmap;
    return this;
  }

  withRTL(rtl: boolean) {
    this.rtl = rtl;
    return this;
  }

  withLTR(ltr: boolean) {
    this.ltr = ltr;
    return this;
  }

  withSourceCode(sourcecode: boolean) {
    this.sourcecode = sourcecode;
    return this;
  }

  withUmbMediaPicker(umbmediapicker: boolean) {
    this.umbmediapicker = umbmediapicker;
    return this;
  }

  withUmbEmbedDialog(umbembeddialog: boolean) {
    this.umbembeddialog = umbembeddialog;
    return this;
  }

  withLink(link: boolean) {
    this.link = link;
    return this;
  }

  withUnlink(unlink: boolean) {
    this.unlink = unlink;
    return this;
  }

  withUmbBlockPicker(umbblockpicker: boolean) {
    this.umbblockpicker = umbblockpicker;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    let values: any[] = [];
    if (this.undo) values.push('undo');
    if (this.redo) values.push('redo');
    if (this.cut) values.push('cut');
    if (this.copy) values.push('copy');
    if (this.paste) values.push('paste');
    if (this.styles) values.push('styles');
    if (this.fontname) values.push('fontname');
    if (this.fontsize) values.push('fontsize');
    if (this.backcolor) values.push('backcolor');
    if (this.blockquote) values.push('blockquote');
    if (this.formatquote) values.push('formatquote');
    if (this.removeformat) values.push('removeformat');
    if (this.bold) values.push('bold');
    if (this.italic) values.push('italic');
    if (this.underline) values.push('underline');
    if (this.strikethrough) values.push('strikethrough');
    if (this.alignleft) values.push('alignleft');
    if (this.aligncenter) values.push('aligncenter');
    if (this.alignright) values.push('alignright');
    if (this.alignjustify) values.push('alignjustify');
    if (this.bullist) values.push('bullist');
    if (this.numlist) values.push('numlist');
    if (this.outdent) values.push('outdent');
    if (this.indent) values.push('indent');
    if (this.anchor) values.push('anchor');
    if (this.table) values.push('table');
    if (this.hr) values.push('hr');
    if (this.subscript) values.push('subscript');
    if (this.superscript) values.push('superscript');
    if (this.charmap) values.push('charmap');
    if (this.rtl) values.push('rtl');
    if (this.ltr) values.push('ltr');
    if (this.sourcecode) values.push('sourcecode');
    if (this.umbmediapicker) values.push('umbmediapicker');
    if (this.umbembeddialog) values.push('umbembeddialog');
    if (this.link) values.push('link');
    if (this.unlink) values.push('unlink');
    if (this.umbblockpicker) values.push('umbblockpicker');
    return values;
  }
}
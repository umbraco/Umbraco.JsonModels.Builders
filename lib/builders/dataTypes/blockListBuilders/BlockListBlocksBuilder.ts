import {BlockListDataTypeBuilder} from "../blockListDataTypeBuilder";

export class BlockListBlocksBuilder {
  parentBuilder;
  backgroundColor;
  contentElementTypeKey;
  editorSize;
  forceHideContentEditorInOverlay;
  iconColor;
  label;
  settingsElementTypeKey;
  stylesheet;
  thumbnail;
  view;

  constructor(parentBuilder: BlockListDataTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withBackgroundColor(backGroundColor: string) {
    this.backgroundColor = backGroundColor;
    return this;
  }

  withContentElementTypeKey(contentElementTypeKey: string) {
    this.contentElementTypeKey = contentElementTypeKey;
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


  withIconColor(iconColor: string) {
    this.iconColor = iconColor;
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

  withStylesheet(stylesheet: string) {
    this.stylesheet = stylesheet;
    return this;
  }

  withThumbnail(thumbnail: string) {
    this.thumbnail = thumbnail;
    return this;
  }

  withView(view: string) {
    this.view = view;
    return this;
  }

  done(): BlockListDataTypeBuilder {
    return this.parentBuilder;
  }

  build() {
    return {
      backgroundColor: this.backgroundColor || null,
      contentElementTypeKey: this.contentElementTypeKey,
      editorSize: this.editorSize || 'medium',
      forceHideContentEditorInOverlay: this.forceHideContentEditorInOverlay || false,
      iconColor: this.iconColor || null,
      label: this.label || null,
      settingsElementTypeKey: this.settingsElementTypeKey || null,
      stylesheet: this.stylesheet || null,
      thumbnail: this.thumbnail || null,
      view: this.view || null
    };
  }
}
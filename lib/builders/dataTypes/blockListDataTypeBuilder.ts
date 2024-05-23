import {DataTypeBuilder} from "./dataTypeBuilder";
import {BlockListBlockBuilder} from "./blockListBuilder";

export class BlockListDataTypeBuilder extends DataTypeBuilder {
  minValue: number;
  maxValue: number;
  maxPropertyWidth: number;
  useSingleBlockMode: boolean;
  useLiveEditing: boolean;
  useInlineEditingAsDefault: boolean;
  blockListBlockBuilder: BlockListBlockBuilder[];

  constructor() {
    super();
    this.blockListBlockBuilder = [];
    this.editorAlias = "Umbraco.BlockList";
    this.editorUiAlias = "Umb.PropertyEditorUi.BlockList";
  }

  withMinValue(minValue: number) {
    this.minValue = minValue;
    return this;
  }

  withMaxValue(maxValue: number) {
    this.maxValue = maxValue;
    return this;
  }

  withMaxPropertyWidth(maxPropertyWidth: number) {
    this.maxPropertyWidth = maxPropertyWidth;
    return this;
  }

  withSingleBlockMode(useSingleBlockMode: boolean) {
    this.useSingleBlockMode = useSingleBlockMode;
    return this;
  }

  withLiveEditing(useLiveEditing: boolean) {
    this.useLiveEditing = useLiveEditing;
    return this;
  }

  withInlineEditingAsDefault(useInlineEditingAsDefault: boolean) {
    this.useInlineEditingAsDefault = useInlineEditingAsDefault;
    return this;
  }

  addBlock(blockListBlockBuilder: BlockListBlockBuilder) {
    this.blockListBlockBuilder.push(blockListBlockBuilder);
    return this;
  }

  getValues() {
    let values: any = [];

    if (this.minValue > this.maxValue) {
      this.minValue = this.maxValue;
    }

    values.push({
      alias: "validationLimit",
      value: {
        min: this.minValue || "",
        max: this.maxValue || ""
      }
    });
    values.push({
      alias: "maxPropertyWidth",
      value: this.maxPropertyWidth || ""
    });
    values.push({
      alias: "useSingleBlockMode",
      value: this.useSingleBlockMode || false
    });
    values.push({
      alias: "useLiveEditing",
      value: this.useLiveEditing || false
    });
    values.push({
      alias: "useInlineEditingAsDefault",
      value: this.useInlineEditingAsDefault || false
    });
    values.push({
      alias: "blocks",
      value: this.blockListBlockBuilder.map(block => block.getValues()) || null
    });

    return values;
  }
}
import {DataTypeBuilder} from "./dataTypeBuilder";
import {BlockListDataType} from "../../models";
import {BlockListBlocksBuilder} from './blockListBuilders';

export class BlockListDataTypeBuilder extends DataTypeBuilder {
  preValues: any = [];
  blockListBlockBuilder;
  max;
  min;
  useLiveEditing;
  useInlineEditingAsDefault;
  maxPropertyWidth;

  constructor(protected blockListDataType: BlockListDataType = new BlockListDataType()) {
    super(blockListDataType);
    this.blockListBlockBuilder = [];
  }

  addBlock(blockListBlockBuilder?: BlockListBlocksBuilder) {
    const builder =
      blockListBlockBuilder === null || blockListBlockBuilder === undefined
        ? new BlockListBlocksBuilder(this)
        : blockListBlockBuilder;

    this.blockListBlockBuilder.push(builder);
    return builder;
  }

  withMax(max: number) {
    this.max = max;
    return this;
  }

  withMin(min: number) {
    this.min = min;
    return this;
  }

  withUseLiveEditing(useLiveEditing: boolean) {
    this.useLiveEditing = useLiveEditing;
    return this;
  }

  withUseInlineEditingAsDefault(useInlineEditingAsDefault: boolean) {
    this.useInlineEditingAsDefault = useInlineEditingAsDefault;
    return this;
  }

  withMaxPropertyWidth(maxPropertyWidth: string) {
    this.maxPropertyWidth = maxPropertyWidth;
    return this;
  }


  build() {
    const blockPrevalue = {
      key: 'blocks',
      value: this.blockListBlockBuilder.map((builder) => {
        return builder.build();
      }),
    };
    this.preValues.push(blockPrevalue);

    // Add min-max Amount of blocks
    this.preValues.push({
      key: 'validationLimit',
      value: {
        max: this.max || null,
        min: this.min || null,
      }
    });

    this.preValues.push({
      key: 'useLiveEditing',
      value: this.useLiveEditing || false,
    });

    this.preValues.push({
      key: 'useInlineEditingAsDefault',
      value: this.useInlineEditingAsDefault || false,
    });

    this.preValues.push({
      key: 'maxPropertyWidth',
      value: this.maxPropertyWidth || null,
    });

    this.dataType.addPrevalues(this.preValues);
    return super.build();
  }
}

import {DataTypeBuilder} from "./dataTypeBuilder";
import {BlockGridDataType} from "../../models";
import {BlockGridBlockGroupBuilder, BlockGridBlocksBuilder} from './blockGridBuilders';

export class BlockGridDataTypeBuilder extends DataTypeBuilder {
  preValues: any = [];
  blockGridBlockBuilder;
  blockGridBlockGroupsBuilder;
  max;
  min;
  useLiveEditing;
  maxPropertyWidth;
  gridColumns;
  layoutStylesheet;
  createLabel;
  blockGridGroups;
  blockGridGroupValue;

  constructor(protected blockGridDataType: BlockGridDataType = new BlockGridDataType()) {
    super(blockGridDataType);
    this.blockGridBlockBuilder = [];
    this.blockGridBlockGroupsBuilder = [];
    this.blockGridGroups = []
  }

  addBlock(blockGridBlockBuilder?: BlockGridBlocksBuilder) {
    const builder =
      blockGridBlockBuilder === null || blockGridBlockBuilder === undefined
        ? new BlockGridBlocksBuilder(this)
        : blockGridBlockBuilder;

    this.blockGridBlockBuilder.push(builder);
    return builder;
  }

  addBlockGroups(blockGridBlockGroupBuilder?: BlockGridBlockGroupBuilder) {
    const builder =
      blockGridBlockGroupBuilder === null || blockGridBlockGroupBuilder === undefined
        ? new BlockGridBlockGroupBuilder(this)
        : blockGridBlockGroupBuilder;

    this.blockGridBlockGroupsBuilder.push(builder);

    return builder;
  }

  // Is used for getting the correct BlockGroupGUID to the correct Block Element.
  getBlockGroupGUID(groupName: string) {
    this.blockGridGroupValue = {
      key: 'blockGroups',
      value: this.blockGridBlockGroupsBuilder.map((builder) => {
        return builder.build();
      }),
    };
    for (let value of this.blockGridGroupValue.value) {
      if (value.name == groupName) {
        return value.key;
      }
    }
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

  withMaxPropertyWidth(maxPropertyWidth: string) {
    this.maxPropertyWidth = maxPropertyWidth;
    return this;
  }

  withGridColumns(gridColumns: number) {
    this.gridColumns = gridColumns;
    return this;
  }

  withLayoutStylesheet(layoutStylesheet: string) {
    this.layoutStylesheet = layoutStylesheet;
    return this;
  }

  withCreateLabel(createLabel: string) {
    this.createLabel = createLabel;
    return this;
  }

  build() {

    const blockPrevalue = {
      key: 'blocks',
      value: this.blockGridBlockBuilder.map((builder) => {
        return builder.build();
      }),
    };
    this.preValues.push(blockPrevalue);

    // Checks if any groups have been added
    if (this.blockGridGroupValue == null) {
      this.blockGridGroupValue = {
        key: 'blockGroups',
        value: null
      };
    }
    // Pushes the groups
    this.preValues.push(this.blockGridGroupValue);

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
      key: 'maxPropertyWidth',
      value: this.maxPropertyWidth || null,
    });

    this.preValues.push({
      key: 'gridColumns',
      value: this.gridColumns || null,
    });

    this.preValues.push({
      key: 'layoutStylesheet',
      value: this.layoutStylesheet || null,
    });

    this.preValues.push({
      key: 'createLabel',
      value: this.createLabel || null,
    });

    this.dataType.addPrevalues(this.preValues);
    return super.build();
  }
}

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

  // When a group is added, it should create an GUID for the group, the GUID is then needed on the blocks that are gonna be in the group.  
  addBlockGroups(blockGridBlockGroupBuilder?: BlockGridBlockGroupBuilder) {
    const builder =
      blockGridBlockGroupBuilder === null || blockGridBlockGroupBuilder === undefined
        ? new BlockGridBlockGroupBuilder(this)
        : blockGridBlockGroupBuilder;

    this.blockGridBlockGroupsBuilder.push(builder);

    console.log(this.blockGridBlockGroupsBuilder);
    console.log(builder.parentBuilder.blockGridBlockGroupsBuilder);
    console.log(builder.parentBuilder);
    console.log(builder);

    return builder;
  }

  // Is called before the builder so the groupValue is not populated yet.
  getBlockGroupGUID(groupName: string) {
    const groupValue = {
      key: 'blockGroups',
      value: this.blockGridBlockGroupsBuilder.map((builder) => {
        return builder.build();
      }),
    };

    for (let value of groupValue.value) {
        if (value.name == groupName) {
          return value.groupKey;
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

    // const testere = {
    //   key: 'blockGroups',
    //   value: this.blockGridBlockGroupsBuilder.map((builder) => {
    //     return builder.build();
    //   }),
    // };
    // this.preValues.push(testere);
    //
    // const groupValue = {
    //   key: 'blockGroups',
    //   value: this.blockGridBlockGroupsBuilder.map((builder) => {
    //     return builder.build();
    //   }),
    // };
    //
    // for (let value of groupValue.value) {
    //   if (value.name == 'testGroups') {
    //     // return value.groupKey;
    //     console.log('of');
    //   }
    // }
    //
    // for (let i = 0; i < groupValue.value.length; i++) {
    //
    //   if (groupValue.value[i].name == 'testGroups') {
    //     console.log('i');
    // return groupValue.value[i].groupKey;
    //   }
    // }


    // console.log(groupValue);
    // console.log(groupValue.value);
    // console.log(groupValue.value.name);
    // console.log(groupValue.value[0].name);


    const blockPrevalue = {
      key: 'blocks',
      value: this.blockGridBlockBuilder.map((builder) => {
        return builder.build();
      }),
    };
    this.preValues.push(blockPrevalue);

    const blockGroupsPrevalue = {
      key: 'blockGroups',
      value: this.blockGridBlockGroupsBuilder.map((builder) => {
        return builder.build();
      }),
    };
    this.preValues.push(blockGroupsPrevalue);

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

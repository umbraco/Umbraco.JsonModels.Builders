import {DataTypeBuilder} from "./dataTypeBuilder";
import {BlockGridBlockBuilder} from "./blockGridBuiler/blockGridBlockBuilder";
import {BlockGridBlockGroupBuilder} from "./blockGridBuiler/blockGridBlockGroupBuilder";

export class BlockGridDataTypeBuilder extends DataTypeBuilder {
  blockGridBlockBuilder: BlockGridBlockBuilder[];
  blockGridBlockGroupBuilder: BlockGridBlockGroupBuilder[];
  minValue: number;
  maxValue: number;
  useLiveEditing: boolean;
  maxPropertyWidth: string;
  gridColumns: number;
  layoutStylesheet: string[];
  createLabel: string;
  blockGridGroupValue;

  constructor() {
    super();
    this.blockGridBlockBuilder = [];
    this.blockGridBlockGroupBuilder = [];
    this.editorAlias = "Umbraco.BlockGrid";
    this.editorUiAlias = "Umb.PropertyEditorUi.BlockGrid";
  }

  addBlock() {
    const builder = new BlockGridBlockBuilder(this);
    this.blockGridBlockBuilder.push(builder);
    return builder;
  }

  addBlockGroup() {
    const builder = new BlockGridBlockGroupBuilder(this);
    this.blockGridBlockGroupBuilder.push(builder);
    return builder;
  }

  // Is used for getting the correct BlockGroupGUID to the correct Block Element.
  getBlockGroupGUID(groupName: string) {
    this.blockGridGroupValue = {
      alias: 'blockGroups',
      value: this.blockGridBlockGroupBuilder.map((builder) => {
        return builder.getValues();
      }),
    };
    for (let value of this.blockGridGroupValue.value) {
      if (value.name == groupName) {
        return value.key;
      }
    }
  }

  withMinValue(minValue: number) {
    this.minValue = minValue;
    return this;
  }

  withMaxValue(maxValue: number) {
    this.maxValue = maxValue;
    return this;
  }

  withLiveEditing(useLiveEditing: boolean) {
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

  withLayoutStylesheet(layoutStylesheet: string[]) {
    this.layoutStylesheet = layoutStylesheet;
    return this;
  }

  withCreateLabel(createLabel: string) {
    this.createLabel = createLabel;
    return this;
  }

  getValues() {
    let values: any[] = [];

    // Since the method getBlockGroupGUID is only called when a group is used by an element, we need to make sure to check if a group actually exists before building, and if it exists, it is added to the blockGroupValue
    if (this.blockGridGroupValue == null) {
      this.blockGridGroupValue = {
        alias: 'blockGroups',
        value: this.blockGridBlockGroupBuilder.map((builder) => {
          return builder.getValues();
        }),
      };
    }

    // Add validationLimit alias and value if present
    if (this.minValue !== undefined || this.maxValue !== undefined) {
      values.push({
        alias: "validationLimit",
        value: {
          min: this.minValue !== undefined ? this.minValue : "",
          max: this.maxValue !== undefined ? this.maxValue : "",
        },
      });
    }
    // Add gridColumns alias and value if present
    if (this.gridColumns !== undefined) {
      values.push({
        alias: "gridColumns",
        value: this.gridColumns,
      });
    }
    // Add layoutStylesheet alias and value if present
    if (this.layoutStylesheet !== undefined) {
      values.push({
        alias: "layoutStylesheet",
        value: this.layoutStylesheet,
      });
    }
    // Add useLiveEditing alias and value if present
    if (this.useLiveEditing !== undefined) {
      values.push({
        alias: "useLiveEditing",
        value: this.useLiveEditing,
      });
    }
    // Add maxPropertyWidth alias and value if present
    if (this.maxPropertyWidth !== undefined) {
      values.push({
        alias: "maxPropertyWidth",
        value: this.maxPropertyWidth,
      });
    }
    // Add blockGridBlockBuilder alias and value if present
    if (this.blockGridBlockBuilder.length > 0) {
      values.push({
        alias: "blocks",
        value: this.blockGridBlockBuilder.map((builder) => {
          return builder.getValues();
        }),
      });
    }
    
    // Add createLabel alias and value if present
    if (this.createLabel !== undefined) {
      values.push({
        alias: "createLabel",
        value: this.createLabel,
      });
    }
    
    // Pushes the groups
    values.push(this.blockGridGroupValue);


    return values;
  }
}
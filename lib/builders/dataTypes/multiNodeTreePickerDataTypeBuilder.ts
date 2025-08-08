import {DataTypeBuilder} from "./dataTypeBuilder";

export class MultiNodeTreePickerDataTypeBuilder extends DataTypeBuilder {
  minNumber: number;
  maxNumber: number;
  ignoreUserStartNodes: boolean;
  filterIds: string;
  startNode: string;

  constructor() {
    super();
    this.editorAlias = "Umbraco.MultiNodeTreePicker";
    this.editorUiAlias = "Umb.PropertyEditorUi.ContentPicker";
  }

  withMinNumber(minNumber: number) {
    this.minNumber = minNumber;
    return this;
  } 

  withMaxNumber(maxNumber: number) {
    this.maxNumber = maxNumber;
    return this;
  }

  withIgnoreUserStartNodes(ignoreUserStartNodes: boolean) {
    this.ignoreUserStartNodes = ignoreUserStartNodes;
    return this;
  }

  withFilterIds(filterIds: string) {
    this.filterIds = filterIds;
    return this;
  }

  withStartNode(startNode: string) {  
    this.startNode = startNode;
    return this;
  }

  getValues() {
    let values: any[] = [];

    values.push({
      alias: "minNumber",
      value: this.minNumber !== undefined ? this.minNumber : 0
    });

    values.push({
      alias: "maxNumber",
      value: this.maxNumber !== undefined ? this.maxNumber : 0
    });
    
    if (this.ignoreUserStartNodes !== undefined) {
      values.push({
        alias: "ignoreUserStartNodes",
        value: this.ignoreUserStartNodes
      });
    }

    if (this.filterIds !== undefined) {
      values.push({
        alias: "filter",
        value: this.filterIds
      });
    }

    if (this.startNode !== undefined) {
      values.push({
        alias: "startNode",
        value: {
          type: this.startNode
        }
      });
    }

    return values;
  }
}
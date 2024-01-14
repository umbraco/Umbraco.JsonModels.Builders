import {MediaTypeBuilder} from "./mediaTypeBuilder";

export class MediaTypePropertyBuilder{
  parentBuilder: MediaTypeBuilder;
  id: string;
  containerId: string;
  sortOrder: number;
  alias: string;
  name: string;
  description: string;
  dataTypeId: string;
  variesByCulture: boolean;
  variesBySegment: boolean;
  mandatory: boolean;
  mandatoryMessage: string
  regEx: string;
  regExMessage: string;
  labelOnTop: boolean;

  constructor(parentBuilder: MediaTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withContainerId(containerId: string) {
    this.containerId = containerId;
    return this;
  }

  withSortOrder(sortOrder: number) {
    this.sortOrder = sortOrder;
    return this;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  withDescription(description: string) {
    this.description = description;
    return this;
  }

  withDataTypeId(dataTypeId: string) {
    this.dataTypeId = dataTypeId;
    return this;
  }

  withVariesByCulture(variesByCulture: boolean) {
    this.variesByCulture = variesByCulture;
    return this;
  }

  withVariesBySegment(variesBySegment: boolean) {
    this.variesBySegment = variesBySegment;
    return this;
  }

  withMandatory(mandatory: boolean) {
    this.mandatory = mandatory;
    return this;
  }

  withMandatoryMessage(mandatoryMessage: string) {
    this.mandatoryMessage = mandatoryMessage;
    return this;
  }

  withRegEx(regEx: string) {
    this.regEx = regEx;
    return this;
  }

  withRegExMessage(regExMessage: string) {
    this.regExMessage = regExMessage;
    return this;
  }

  withLabelOnTop(labelOnTop: boolean) {
    this.labelOnTop = labelOnTop;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      id: this.id || null,
      containerId: this.containerId || null,
      sortOrder: this.sortOrder || 0,
      alias: this.alias || "",
      name: this.name || "",
      description: this.description || "",
      dataTypeId: this.dataTypeId || null,
      variesByCulture: this.variesByCulture || false,
      variesBySegment: this.variesBySegment || false,
      mandatory: this.mandatory || false,
      validation: {
        mandatoryMessage: this.mandatoryMessage || "",
        regEx: this.regEx || "",
        regExMessage: this.regExMessage || ""
      },
      appearance: {
        labelOnTop: this.labelOnTop || false
      }
    };
  }
}
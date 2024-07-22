import {DocumentBuilder} from "./documentBuilder";
import {MediaPickerValueBuilder} from "./mediaPickerValueBuilder";

export class DocumentValueBuilder {
  parentBuilder: DocumentBuilder;
  culture: string;
  segment: string;
  alias: string;
  value: string;
  mediaPickerValueBuilder: MediaPickerValueBuilder[];

  constructor(parentBuilder: DocumentBuilder) {
    this.parentBuilder = parentBuilder;
    this.mediaPickerValueBuilder = [];
  }

  withCulture(culture: string) {
    this.culture = culture;
    return this;
  }

  withSegment(segment: string) {
    this.segment = segment;
    return this;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  addMediaPickerValue() {
    const builder = new MediaPickerValueBuilder(this);
    this.mediaPickerValueBuilder.push(builder);
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    let value: any = null;

    if (this.value != null) {
      value = this.value;
    } else {
      if (this.mediaPickerValueBuilder && this.mediaPickerValueBuilder.length > 0) {
        value = this.mediaPickerValueBuilder.map((builder) => {
          return builder.getValue();
        })
      }
    }

    return {
      culture: this.culture || null,
      segment: this.segment || null,
      alias: this.alias || null,
      value: value || null
    }
  };
}
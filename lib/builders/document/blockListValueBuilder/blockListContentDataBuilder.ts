import {BlockListValueBuilder} from "./blockListValueBuilder";
import {ContentDataValueBuilder} from "./contentDataValueBuilder";

export class BlockListContentDataBuilder {
  parentBuilder: BlockListValueBuilder;
  contentTypeKey: string;
  key: string;
  contentDataValueBuilder: ContentDataValueBuilder[];

  constructor(parentBuilder: BlockListValueBuilder) {
    this.parentBuilder = parentBuilder;
    this.contentDataValueBuilder = [];
  }

  withContentTypeKey(contentTypeKey: string) {
    this.contentTypeKey = contentTypeKey;
    return this;
  }
  
  withKey(key: string) {
    this.key = key;
    return this;
  }

  addContentDataValue(){
    const builder = new ContentDataValueBuilder(this);
    this.contentDataValueBuilder.push(builder);
    return builder;
  }

  done() {
    return this.parentBuilder;
  }

  getValue() {
    return {
      contentTypeKey: this.contentTypeKey,
      key: this.key,
      value: this.contentDataValueBuilder.map((builder) => {
        return builder.getValue();
      })
    };
  }
}
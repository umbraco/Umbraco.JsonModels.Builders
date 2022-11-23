export class BlockGridBlockGroupBuilder {
  parentBuilder
  key;
  name;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  /// Should create a GUID
  addGroupKey() {
    const crypto = require('crypto');
    this.key = crypto.randomUUID();
    return this;
  } 
  
  // withKey(key) {
  //   this.key = key;
  //   return this;
  // }

  withName(name) {
    this.name = name;
    return this;
  }

  // generateGroupKey() {
  //   const crypto = require('crypto');
  //   const guid = crypto.randomUUID();
  //   return "umb://element/" + (guid.replace(/-/g, ""));
  // }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      key: this.key || null,
      name: this.name || null
    };
  }
}
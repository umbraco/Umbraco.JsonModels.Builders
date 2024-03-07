import {UserGroupBuilder} from "./userGroupBuilder";

export class UserGroupPermissionBuilder {
  parentBuilder: UserGroupBuilder;
  documentId: string;
  verbs: string[];

  constructor(parentBuilder: UserGroupBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withDocumentId(documentId: string) {
    this.documentId = documentId;
    return this;
  }

  withVerbs(verbs: string[]) {
    this.verbs = verbs;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      document: this.documentId ? {id: this.documentId} : null,
      verbs: this.verbs || []
    };
  }
}
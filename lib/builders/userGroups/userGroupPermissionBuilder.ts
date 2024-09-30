import {UserGroupBuilder} from "./userGroupBuilder";
import {UserGroupsPermissionsBaseBuilder} from "./userGroupsPermissionsBaseBuilder";

export class UserGroupPermissionBuilder {
  parentBuilder: UserGroupBuilder;
  documentId: string;
  userGroupsPermissionsBaseBuilder: UserGroupsPermissionsBaseBuilder;

  constructor(parentBuilder: UserGroupBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withDocumentId(documentId: string) {
    this.documentId = documentId;
    return this;
  }

  addVerbs() {
    const builder = new UserGroupsPermissionsBaseBuilder(this);
    this.userGroupsPermissionsBaseBuilder = builder;
    return builder
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      document: this.documentId ? {id: this.documentId} : null,
      verbs: this.userGroupsPermissionsBaseBuilder
      ? this.userGroupsPermissionsBaseBuilder.build()
      : [],
    };
  }
}
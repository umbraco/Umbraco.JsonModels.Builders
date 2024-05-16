export class UserBuilder {
  email: string;
  name: string;
  userGroupIds: { id: string }[];
  id: string;

  constructor() {
    this.userGroupIds = [];
  }

  withEmail(email: string) {
    this.email = email;
    return this;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  addUserGroupId(userGroupId: string) {
    this.userGroupIds.push({id: userGroupId});
    return this;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  build() {
    if (!this.id) {
      const crypto = require('crypto');
      this.id = crypto.randomUUID();
    }

    return {
      email: this.email || "",
      name: this.name || this.email,
      userGroupIds: this.userGroupIds,
      userName: this.email,
      id: this.id
    };
  }
}

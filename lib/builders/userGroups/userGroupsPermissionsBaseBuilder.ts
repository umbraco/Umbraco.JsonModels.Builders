export class UserGroupsPermissionsBaseBuilder {
  parentBuilder;

  // Document permissions
  documentRead: boolean = false;
  documentCreateDocumentBlueprint: boolean = false;
  documentDelete: boolean = false;
  documentCreate: boolean = false;
  documentNotifications: boolean = false;
  documentPublish: boolean = false;
  documentSetPermissions: boolean = false;
  documentUnpublish: boolean = false;
  documentUpdate: boolean = false;
  documentDuplicate: boolean = false;
  documentMoveTo: boolean = false;
  documentSortChildren: boolean = false;
  documentCultureAndHostnames: boolean = false;
  documentPublicAccess: boolean = false;
  documentRollback: boolean = false;
  documentReadPropertyValue: boolean = false;
  documentWritePropertyValue: boolean = false;

  // Element permissions
  elementRead: boolean = false;
  elementCreate: boolean = false;
  elementDelete: boolean = false;
  elementPublish: boolean = false;
  elementUnpublish: boolean = false;
  elementUpdate: boolean = false;
  elementDuplicate: boolean = false;
  elementMove: boolean = false;
  elementRollback: boolean = false;

  constructor(parentBuilder) {
    this.parentBuilder = parentBuilder;
  }

  // Document permission methods
  withDocumentReadPermission(read: boolean) {
    this.documentRead = read;
    return this;
  }

  withDocumentCreateDocumentBlueprintPermission(createDocumentBlueprint: boolean) {
    this.documentCreateDocumentBlueprint = createDocumentBlueprint;
    return this;
  }

  withDocumentDeletePermission(deletePermission: boolean) {
    this.documentDelete = deletePermission;
    return this;
  }

  withDocumentCreatePermission(createPermission: boolean) {
    this.documentCreate = createPermission;
    return this;
  }

  withDocumentNotificationsPermission(notifications: boolean) {
    this.documentNotifications = notifications;
    return this;
  }

  withDocumentPublishPermission(publish: boolean) {
    this.documentPublish = publish;
    return this;
  }

  withDocumentSetPermissionsPermission(setPermissions: boolean) {
    this.documentSetPermissions = setPermissions;
    return this;
  }

  withDocumentUnpublishPermission(unpublish: boolean) {
    this.documentUnpublish = unpublish;
    return this;
  }

  withDocumentUpdatePermission(update: boolean) {
    this.documentUpdate = update;
    return this;
  }

  withDocumentDuplicatePermission(duplicate: boolean) {
    this.documentDuplicate = duplicate;
    return this;
  }

  withDocumentMoveToPermission(moveTo: boolean) {
    this.documentMoveTo = moveTo;
    return this;
  }

  withDocumentSortChildrenPermission(sortChildren: boolean) {
    this.documentSortChildren = sortChildren;
    return this;
  }

  withDocumentCultureAndHostnamesPermission(cultureAndHostnames: boolean) {
    this.documentCultureAndHostnames = cultureAndHostnames;
    return this;
  }

  withDocumentPublicAccessPermission(publicAccess: boolean) {
    this.documentPublicAccess = publicAccess;
    return this;
  }

  withDocumentRollbackPermission(rollback: boolean) {
    this.documentRollback = rollback;
    return this;
  }

  withDocumentReadPropertyValuePermission(readPropertyValue: boolean) {
    this.documentReadPropertyValue = readPropertyValue;
    return this;
  }

  withDocumentWritePropertyValuePermission(writePropertyValue: boolean) {
    this.documentWritePropertyValue = writePropertyValue;
    return this;
  }

  // Element permission methods
  withElementReadPermission(read: boolean) {
    this.elementRead = read;
    return this;
  }

  withElementCreatePermission(create: boolean) {
    this.elementCreate = create;
    return this;
  }

  withElementDeletePermission(deletePermission: boolean) {
    this.elementDelete = deletePermission;
    return this;
  }

  withElementPublishPermission(publish: boolean) {
    this.elementPublish = publish;
    return this;
  }

  withElementUnpublishPermission(unpublish: boolean) {
    this.elementUnpublish = unpublish;
    return this;
  }

  withElementUpdatePermission(update: boolean) {
    this.elementUpdate = update;
    return this;
  }

  withElementDuplicatePermission(duplicate: boolean) {
    this.elementDuplicate = duplicate;
    return this;
  }

  withElementMovePermission(move: boolean) {
    this.elementMove = move;
    return this;
  }

  withElementRollbackPermission(rollback: boolean) {
    this.elementRollback = rollback;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    let values: any[] = [];

    // Document permissions
    if (this.documentRead) {
      values.push('Umb.Document.Read');
    }
    if (this.documentCreateDocumentBlueprint) {
      values.push('Umb.Document.CreateBlueprint');
    }
    if (this.documentDelete) {
      values.push('Umb.Document.Delete');
    }
    if (this.documentCreate) {
      values.push('Umb.Document.Create');
    }
    if (this.documentNotifications) {
      values.push('Umb.Document.Notifications');
    }
    if (this.documentPublish) {
      values.push('Umb.Document.Publish');
    }
    if (this.documentSetPermissions) {
      values.push('Umb.Document.Permissions');
    }
    if (this.documentUnpublish) {
      values.push('Umb.Document.Unpublish');
    }
    if (this.documentUpdate) {
      values.push('Umb.Document.Update');
    }
    if (this.documentDuplicate) {
      values.push('Umb.Document.Duplicate');
    }
    if (this.documentMoveTo) {
      values.push('Umb.Document.Move');
    }
    if (this.documentSortChildren) {
      values.push('Umb.Document.Sort');
    }
    if (this.documentCultureAndHostnames) {
      values.push('Umb.Document.CultureAndHostnames');
    }
    if (this.documentPublicAccess) {
      values.push('Umb.Document.PublicAccess');
    }
    if (this.documentRollback) {
      values.push('Umb.Document.Rollback');
    }
    if (this.documentReadPropertyValue) {
      values.push('Umb.Document.PropertyValue.Read');
    }
    if (this.documentWritePropertyValue) {
      values.push('Umb.Document.PropertyValue.Write');
    }

    // Element permissions
    if (this.elementRead) {
      values.push('Umb.Element.Read');
    }
    if (this.elementCreate) {
      values.push('Umb.Element.Create');
    }
    if (this.elementDelete) {
      values.push('Umb.Element.Delete');
    }
    if (this.elementPublish) {
      values.push('Umb.Element.Publish');
    }
    if (this.elementUnpublish) {
      values.push('Umb.Element.Unpublish');
    }
    if (this.elementUpdate) {
      values.push('Umb.Element.Update');
    }
    if (this.elementDuplicate) {
      values.push('Umb.Element.Duplicate');
    }
    if (this.elementMove) {
      values.push('Umb.Element.Move');
    }
    if (this.elementRollback) {
      values.push('Umb.Element.Rollback');
    }

    return values;
  }
}
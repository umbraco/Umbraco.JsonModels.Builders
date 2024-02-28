﻿import {DocumentTypePropertyBuilder} from "./documentTypePropertyBuilder";
import {DocumentTypeContainerBuilder} from "./documentTypeContainerBuilder";
import {DocumentTypeAllowedDocumentTypeBuilder} from "./documentTypeAllowedDocumentTypeBuilder";
import {DocumentTypeCompositionBuilder} from "./documentTypeCompositionBuilder";
import {DocumentTypeAllowedTemplateBuilder} from "./documentTypeAllowedTemplateBuilder";

export class DocumentTypeBuilder {
  alias: string;
  name: string;
  description: string;
  icon: string;
  allowedAsRoot: boolean;
  variesByCulture: boolean;
  variesBySegment: boolean;
  collectionId: string;
  collectionObject: any;
  isElement: boolean;
  documentTypePropertyBuilder: DocumentTypePropertyBuilder[];
  documentTypeAllowedDocumentTypeBuilder: DocumentTypeAllowedDocumentTypeBuilder[];
  documentTypeAllowedTemplateBuilder: DocumentTypeAllowedTemplateBuilder[];
  documentTypeCompositionBuilder: DocumentTypeCompositionBuilder[];
  documentTypeContainerBuilder: DocumentTypeContainerBuilder[];
  id: string;
  folderId: string;
  folderObject: any;
  defaultTemplateId: string;
  defaultTemplateObject: any;
  preventCleanup: boolean;
  keepAllVersionsNewerThanDays: number;
  keepLatestVersionPerDayForDays: number;

  constructor() {
    this.documentTypePropertyBuilder = [];
    this.documentTypeAllowedDocumentTypeBuilder = [];
    this.documentTypeAllowedTemplateBuilder = [];
    this.documentTypeCompositionBuilder = [];
    this.documentTypeContainerBuilder = [];
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

  withIcon(icon: string) {
    this.icon = icon;
    return this;
  }

  withAllowedAsRoot(allowedAsRoot: boolean) {
    this.allowedAsRoot = allowedAsRoot;
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

  withIsElement(isElement: boolean) {
    this.isElement = isElement;
    return this;
  }

  addProperty() {
    const builder = new DocumentTypePropertyBuilder(this);
    this.documentTypePropertyBuilder.push(builder);
    return builder;
  }

  addContainer() {
    const builder = new DocumentTypeContainerBuilder(this);
    this.documentTypeContainerBuilder.push(builder);
    return builder;
  }

  addAllowedDocumentType() {
    const builder = new DocumentTypeAllowedDocumentTypeBuilder(this);
    this.documentTypeAllowedDocumentTypeBuilder.push(builder);
    return builder;
  }

  addAllowedTemplateId() {
    const builder = new DocumentTypeAllowedTemplateBuilder(this);
    this.documentTypeAllowedTemplateBuilder.push(builder);
    return builder;
  }

  addComposition() {
    const builder = new DocumentTypeCompositionBuilder(this);
    this.documentTypeCompositionBuilder.push(builder);
    return builder;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withDefaultTemplateId(defaultTemplateId: string) {
    this.defaultTemplateId = defaultTemplateId;
    return this;
  }

  withPreventCleanup(preventCleanup: boolean) {
    this.preventCleanup = preventCleanup;
    return this;
  }

  withKeepAllVersionsNewerThanDays(keepAllVersionsNewerThanDays: number) {
    this.keepAllVersionsNewerThanDays = keepAllVersionsNewerThanDays;
    return this;
  }

  withKeepLatestVersionPerDayForDays(keepLatestVersionPerDayForDays: number) {
    this.keepLatestVersionPerDayForDays = keepLatestVersionPerDayForDays;
    return this;
  }

  build() {
    if (!this.id) {
      const crypto = require('crypto');
      this.id = crypto.randomUUID();
    }

    this.defaultTemplateObject = this.defaultTemplateId ? {id: this.defaultTemplateId} : null;
    this.collectionObject = this.collectionId ? {id: this.collectionId} : null;
    this.folderObject = this.folderId ? {id: this.folderId} : null;

    return {
      alias: this.alias || "",
      name: this.name || "",
      description: this.description || "",
      icon: this.icon || "icon-document",
      allowedAsRoot: this.allowedAsRoot || false,
      variesByCulture: this.variesByCulture || false,
      variesBySegment: this.variesBySegment || false,
      collection: this.collectionObject || null,
      isElement: this.isElement || false,
      properties: this.documentTypePropertyBuilder.map((builder) => {
        return builder.build();
      }) || [],
      containers: this.documentTypeContainerBuilder.map((builder) => {
        return builder.build();
      }) || [],
      allowedDocumentTypes: this.documentTypeAllowedDocumentTypeBuilder.map((builder) => {
        return builder.build();
      }) || [],
      compositions: this.documentTypeCompositionBuilder.map((builder) => {
        return builder.build();
      }) || [],
      id: this.id,
      folder: this.folderObject || null,
      allowedTemplates: this.documentTypeAllowedTemplateBuilder.map((builder) => {
        return builder.build();
      }) || [],
      defaultTemplate: this.defaultTemplateObject || null,
      cleanup: {
        preventCleanup: this.preventCleanup || false,
        keepAllVersionsNewerThanDays: this.keepAllVersionsNewerThanDays || null,
        keepLatestVersionPerDayForDays: this.keepLatestVersionPerDayForDays || null
      }
    };
  }
}
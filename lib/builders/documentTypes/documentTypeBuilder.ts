import {DocumentTypePropertyBuilder} from "./documentTypePropertyBuilder";
import {DocumentTypeContainerBuilder} from "./documentTypeContainerBuilder";
import {DocumentTypeAllowedContentTypeBuilder} from "./documentTypeAllowedContentTypeBuilder";
import {DocumentTypeCompositionBuilder} from "./documentTypeCompositionBuilder";
import {DocumentTypeAllowedTemplateIdBuilder} from "./documentTypeAllowedTemplateIdBuilder";

export class DocumentTypeBuilder {
  alias: string;
  name: string;
  description: string;
  icon: string;
  allowedAsRoot: boolean;
  variesByCulture: boolean;
  variesBySegment: boolean;
  isElement: boolean;
  documentTypePropertyBuilder: DocumentTypePropertyBuilder[];
  documentTypeAllowedContentTypeBuilder: DocumentTypeAllowedContentTypeBuilder[];
  documentTypeAllowedTemplateIdBuilder: DocumentTypeAllowedTemplateIdBuilder[];
  documentTypeCompositionBuilder: DocumentTypeCompositionBuilder[];
  documentTypeContainerBuilder: DocumentTypeContainerBuilder[];
  id: string;
  defaultTemplateId: string[];
  preventCleanup: boolean;
  keepAllVersionsNewerThanDays: number;
  keepLatestVersionPerDayForDays: number;

  constructor() {
    this.documentTypePropertyBuilder = [];
    this.documentTypeAllowedContentTypeBuilder = [];
    this.documentTypeAllowedTemplateIdBuilder = [];
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

  addProperties() {
    const builder = new DocumentTypePropertyBuilder(this);
    this.documentTypePropertyBuilder.push(builder);
    return builder;
  }

  addContainers() {
    const builder = new DocumentTypeContainerBuilder(this);
    this.documentTypeContainerBuilder.push(builder);
    return builder;
  }

  addAllowedDocumentTypes() {
    const builder = new DocumentTypeAllowedContentTypeBuilder(this);
    this.documentTypeAllowedContentTypeBuilder.push(builder);
    return builder;
  }

  addAllowedTemplateIds() {
    const builder = new DocumentTypeAllowedTemplateIdBuilder(this);
    this.documentTypeAllowedTemplateIdBuilder.push(builder);
    return this;
  }

  addCompositions() {
    const builder = new DocumentTypeCompositionBuilder(this);
    this.documentTypeCompositionBuilder.push(builder);
    return builder;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  addTemplateIds() {
    const builder = new DocumentTypeAllowedTemplateIdBuilder(this);
    this.documentTypeAllowedTemplateIdBuilder.push(builder);
    return builder;
  }

  withDefaultTemplateId(defaultTemplateId: string[]) {
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

    return {
      alias: this.alias,
      name: this.name,
      description: this.description || "",
      icon: this.icon || "icon-document",
      allowedAsRoot: this.allowedAsRoot || false,
      variesByCulture: this.variesByCulture || false,
      variesBySegment: this.variesBySegment || false,
      isElement: this.isElement || false,
      properties: this.documentTypePropertyBuilder.map((builder) => {
        return builder.build();
      }) || [],
      containers: this.documentTypeContainerBuilder.map((builder) => {
        return builder.build();
      }) || [],
      allowedDocumentTypes: this.documentTypeAllowedContentTypeBuilder.map((builder) => {
        return builder.build();
      }) || [],
      compositions: this.documentTypeCompositionBuilder.map((builder) => {
        return builder.build();
      }) || [],
      id: this.id,
      allowedTemplates: this.documentTypeAllowedTemplateIdBuilder.map((builder) => {
        return builder.build();
      }) || [],
      defaultTemplateId: this.defaultTemplateId || null,
      cleanup: {
        preventCleanup: this.preventCleanup || false,
        keepAllVersionsNewerThanDays: this.keepAllVersionsNewerThanDays || null,
        keepLatestVersionPerDayForDays: this.keepLatestVersionPerDayForDays || null
      }
    };
  }
}
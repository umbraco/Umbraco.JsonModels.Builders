import {MediaTypePropertyBuilder} from "./mediaTypePropertyBuilder";
import {MediaTypeContainerBuilder} from "./mediaTypeContainerBuilder";
import {MediaTypeAllowedContentTypeBuilder} from "./mediaTypeAllowedContentTypeBuilder";
import {MediaTypeCompositionBuilder} from "./mediaTypeCompositionBuilder";

export class MediaTypeBuilder {
  alias: string;
  name: string;
  description: string;
  icon: string;
  allowedAsRoot: boolean;
  variesByCulture: boolean;
  variesBySegment: boolean;
  isElement: boolean;
  mediaTypePropertyBuilder: MediaTypePropertyBuilder[];
  mediaTypeContainerBuilder: MediaTypeContainerBuilder[];
  mediaTypeAllowedContentTypeBuilder: MediaTypeAllowedContentTypeBuilder[];
  mediaTypeCompositionBuilder: MediaTypeCompositionBuilder[];
  id: string;
  containerId: string;

  constructor() {
    this.mediaTypePropertyBuilder = [];
    this.mediaTypeContainerBuilder = [];
    this.mediaTypeAllowedContentTypeBuilder = [];
    this.mediaTypeCompositionBuilder = [];
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
    const builder = new MediaTypePropertyBuilder(this);
    this.mediaTypePropertyBuilder.push(builder);
    return builder;
  }

  addContainers() {
    const builder = new MediaTypeContainerBuilder(this);
    this.mediaTypeContainerBuilder.push(builder);
    return builder;
  }

  addAllowedContentTypes() {
    const builder = new MediaTypeAllowedContentTypeBuilder(this);
    this.mediaTypeAllowedContentTypeBuilder.push(builder);
    return builder;
  }

  addCompositions() {
    const builder = new MediaTypeCompositionBuilder(this);
    this.mediaTypeCompositionBuilder.push(builder);
    return builder;
  }


  withContainerId(containerId: string) {
    this.containerId = containerId;
    return this;
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  build() {
    if (this.id == null) {
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
      properties: this.mediaTypePropertyBuilder.map((builder) => {
        return builder.build();
      }) || [],
      containers: this.mediaTypeContainerBuilder.map((builder) => {
        return builder.build();
      }) || [],
      allowedContentTypes: this.mediaTypeAllowedContentTypeBuilder.map((builder) => {
        return builder.build();
      }) || [],
      compositions: this.mediaTypeCompositionBuilder.map((builder) => {
        return builder.build();
      }) || [],
      id: this.id,
      containerId: this.containerId || null,
    }
  }
}
import {DocumentTypeBuilder} from "./documentTypeBuilder";

export class DocumentTypeCompositionBuilder {
  parentBuilder: DocumentTypeBuilder;
  documentTypeId: string;
  compositionType: string;

  constructor(parentBuilder: DocumentTypeBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withDocumentTypeId(documentTypeId: string) {
    this.documentTypeId = documentTypeId;
    return this;
  }

  withCompositionType(compositionType: string) {
    this.compositionType = compositionType;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      documentType: {
        id: this.documentTypeId || null
      },
      compositionType: this.compositionType || "Composition"
    };
  }
}
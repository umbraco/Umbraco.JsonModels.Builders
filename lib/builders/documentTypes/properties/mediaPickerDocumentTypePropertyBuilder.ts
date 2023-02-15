import { DocumentTypePropertyBuilder } from './documentTypePropertyBuilder';

export class MediaPickerDocumentTypePropertyBuilder extends DocumentTypePropertyBuilder {
  constructor(parentBuilder) {
    super(parentBuilder);
    this.dataTypeId = 1051;
  }
}

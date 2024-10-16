import DocumentTypeGroupBuilder from "./documentTypeGroupBuilder";

export default class DocumentTypeTabBuilder extends DocumentTypeGroupBuilder { 
    documentTypeGroupBuilders;

    constructor(parentBuilder) {
        super(parentBuilder);
        this.documentTypeGroupBuilders = [];
    }
    
    addGroup(documentTypeGroupBuilder?: DocumentTypeGroupBuilder) {
        const builder =
          documentTypeGroupBuilder === null || documentTypeGroupBuilder === undefined
            ? new DocumentTypeGroupBuilder(this)
            : documentTypeGroupBuilder;
        this.documentTypeGroupBuilders.push(builder);
        return builder;
    }

    done(){
        this.documentTypeGroupBuilders.forEach(element => {
            element.alias = this.getAlias() + "/" + element.getAlias();
            this.parentBuilder.documentTypeGroupBuilders.push(element);
        });
        return this.parentBuilder;
    }
    
    build(){
      const crypto = require('crypto');
      const name = this.name || crypto.randomUUID();
      return {
        id: this.id || -1,
        inherited: this.inherited || false,
        name: this.name || name,
        alias: this.getAlias(),
        sortOrder: this.sortOrder || 0,
        type : 1,
        properties: this.documentTypeGroupPropertyBuilders.map((builder) => {
          return builder.build();
        }),
      };
    }
}

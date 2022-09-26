export class DomainPropertyBuilder {
    parentBuilder;
    name;
    lang;

    constructor(parentBuilder) {
        this.parentBuilder = parentBuilder;
    }

    withEndpoint(name: string) {
        this.name = name;
        return this;
    }

    withLanguageId(lang: number | null) {
        this.lang = lang;
        return this;
    }

    done() {
        return this.parentBuilder;
    }

    build() {
        return {
            name: this.name,
            lang: this.lang,
        };
    }
}
export class WebhookHeaderBuilder {
    header: string;
    parentBuilder;
    value: string;

    constructor(parentBuilder) {
        this.parentBuilder = parentBuilder;
    }

    withType(header: string) {
        this.header = header;
        return this;
    }

    withValue(value: string) {
        this.value = value;
        return this;
    }

    done() {
        return this.parentBuilder;
    }

    build() {
        const webhookHeader = {};
        webhookHeader[this.header] = this.value;
        return webhookHeader;
    }
}
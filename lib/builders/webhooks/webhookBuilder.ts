import {WebhookEventBuilder} from "./webhookEventBuilder";
import {WebhookHeaderBuilder} from "./webhookHeaderBuilder";

export class WebhookBuilder {
    key: string;
    url: string;
    contentTypeKeys;
    enabled: boolean;
    name: string;
    webhookEventBuilder;
    webhookHeaderBuilder;

    constructor() {
        this.contentTypeKeys = [];
        this.webhookEventBuilder = [];
        this.webhookHeaderBuilder = [];
    }

    withKey(key: string) {
        this.key = key;
        return this;
    };

    withName(name: string) {
        this.name = name;
        return this;
    }

    isEnabled(enabled: boolean) {
        this.enabled = enabled;
        return this;
    }

    addEvent() {
        const builder = new WebhookEventBuilder(this);
        this.webhookEventBuilder.push(builder);
        return builder;
    }

    addContentTypeKey(contentTypeKey: string) {
        this.contentTypeKeys.push(contentTypeKey);
        return this;
    }

    addHeader() {
        const builder = new WebhookHeaderBuilder(this);
        this.webhookHeaderBuilder.push(builder);
        return builder;
    }

    withUrl(url) {
        this.url = url;
        return this;
    }

    build() {
        const headers = {};
        this.webhookHeaderBuilder.forEach((builder) => {
            const header = builder.build();
            Object.assign(headers, header);
        });

        return {
            key: this.key || "",
            url: this.url || "",
            events: this.webhookEventBuilder.map((builder) => {
                return builder.build();
            }),
            contentTypeKeys: this.contentTypeKeys || [],
            enabled: this.enabled || true,
            headers: headers || {},
            name: this.name || "",
        };
    }
}
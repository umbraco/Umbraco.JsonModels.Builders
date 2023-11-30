export class WebhookEventBuilder {
    parentBuilder;
    eventName;
    eventType: string;
    alias: string;


    constructor(parentBuilder) {
        this.parentBuilder = parentBuilder;
    }

    withEventName(eventName: string) {
        this.eventName = eventName;
        return this;
    }

    done() {
        return this.parentBuilder;
    }

    build() {
        switch (this.eventName) {
            case "Content was deleted":
                this.alias = "Umbraco.ContentDelete";
                this.eventType = "Content";
                break;
            case "Content was published":
                this.alias = "Umbraco.ContentPublish";
                this.eventType = "Content";
                break;
            case "Content was unpublished":
                this.alias = "Umbraco.ContentUnpublish";
                this.eventType = "Content";
                break;
            case "Media was deleted":
                this.alias = "Umbraco.MediaDelete";
                this.eventType = "Media";
                break;
            case "Media was saved":
                this.alias = "Umbraco.MediaSave";
                this.eventType = "Media";
                break;
        }

        return {
            eventName: this.eventName,
            eventType: this.eventType,
            alias: this.alias,
        };
    }
}
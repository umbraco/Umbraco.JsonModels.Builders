import * as fs from "fs";

export class MediaFileBuilder {
    name;
    mimeType;
    path;
    buffer;

    withName(name) {
        this.name = name;
        return this;
    }

    withMimeType(mimeType) {
        this.mimeType = mimeType;
        return this;
    }

    withPath(path) {
        this.buffer = fs.readFileSync("./fixtures/"+ path);
        return this;
    }
    
    build() {
        return {
            name: this.name,
            mimeType: this.mimeType || "image/png",
            path: this.path,
            buffer: this.buffer
        };
    }
}
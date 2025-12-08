# Umbraco.JsonModels.Builder

A TypeScript library that provides builders for creating JSON models used with the Umbraco CMS backoffice. This package implements the [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern) to simplify the creation of complex Umbraco configuration objects through a fluent API with sensible defaults.

## Overview

Instead of manually constructing complex JSON objects with numerous properties, developers can use these builders to create Umbraco entities (document types, data types, media, users, etc.) with a clean, chainable API.

## Prerequisites

- Node.js 16.17.1 or higher
- npm

## Installation

```bash
npm install @umbraco/json-models-builders
```

## Quick Start

```typescript
import { DocumentTypeBuilder } from "@umbraco/json-models-builders";

// Create a document type with default values
const documentType = new DocumentTypeBuilder().build();

// Create a document type with custom configuration
const customDocType = new DocumentTypeBuilder()
  .withName("Blog Post")
  .withIcon("icon-newspaper")
  .withAllowedAsRoot(true)
  .build();
```

## The Builder Pattern

Builders handle setting all properties with default values, so you don't need to manually configure every field. For example, `DocumentTypeBuilder` manages these properties automatically:

- `compositeContentTypes`, `isContainer`, `allowAsRoot`, `allowedTemplates`
- `allowedContentTypes`, `alias`, `description`, `thumbnail`, `name`
- `id`, `icon`, `trashed`, `key`, `parentId`, `path`
- `allowCultureVariant`, `isElement`, `defaultTemplate`
- And many more...

Simply instantiate the builder, optionally configure what you need, and call `.build()`.

## Available Builders

### Document Types

```typescript
import { DocumentTypeBuilder } from "@umbraco/json-models-builders";

const documentType = new DocumentTypeBuilder()
  .withName("Article")
  .withAlias("article")
  .withDescription("An article content type")
  .withIcon("icon-document")
  .withAllowedAsRoot(true)
  .withVariesByCulture(true)
  .addProperty()
    .withName("Title")
    .withAlias("title")
    .withDataTypeId("your-datatype-id")
    .done()
  .addContainer()
    .withName("Content")
    .withType("Tab")
    .done()
  .build();
```

### Data Types

The library includes 34+ data type builders:

#### Text & Basic Types
- `TextStringDataTypeBuilder` - Single-line text
- `TextAreaDataTypeBuilder` - Multi-line text
- `NumericDataTypeBuilder` - Integer numbers
- `DecimalDataTypeBuilder` - Decimal numbers
- `TrueFalseDataTypeBuilder` - Boolean toggle
- `EmailAddressDataTypeBuilder` - Email with validation

#### Date & Time
- `DatePickerDataTypeBuilder` - Date selection
- `DateTimePickerDataTypeBuilder` - Date and time selection

#### Selection
- `DropdownDataTypeBuilder` - Dropdown lists
- `CheckboxListDataTypeBuilder` - Multiple checkboxes
- `RadioboxDataTypeBuilder` - Radio buttons
- `TagsDataTypeBuilder` - Tag picker

#### Content Pickers
- `ContentPickerDataTypeBuilder` - Single content picker
- `MultiNodeTreePickerDataTypeBuilder` - Multi-content picker
- `MediaPickerDataTypeBuilder` - Media picker
- `EntityDataPickerDataTypeBuilder` - Generic entity picker

#### Rich Content
- `TinyMCEDataTypeBuilder` - Rich text editor (TinyMCE)
- `TiptapDataTypeBuilder` - Rich text editor (Tiptap)
- `MarkdownEditorDataTypeBuilder` - Markdown editor
- `CodeEditorDataTypeBuilder` - Code editor

#### Complex Types
- `BlockListDataTypeBuilder` - Block list editor
- `BlockGridDataTypeBuilder` - Block grid layout
- `ImageCropperDataTypeBuilder` - Image cropper
- `ListViewDataTypeBuilder` - List view configurations

#### Other Types
- `SliderDataTypeBuilder` - Slider control
- `LabelDataTypeBuilder` - Display-only labels
- `MultiUrlPickerDataTypeBuilder` - URL picker
- `UploadFieldDataTypeBuilder` - File upload
- `ApprovedColorDataTypeBuilder` - Color picker

**Example:**

```typescript
import { BlockListDataTypeBuilder, TextStringDataTypeBuilder } from "@umbraco/json-models-builders";

const textString = new TextStringDataTypeBuilder()
  .withName("Page Title")
  .withMaxChars(100)
  .build();

const blockList = new BlockListDataTypeBuilder()
  .withName("Content Blocks")
  .withMinValue(1)
  .withMaxValue(10)
  .withUseSingleBlockMode(false)
  .addBlock()
    .withContentElementTypeKey("element-type-key")
    .withLabel("Text Block")
    .done()
  .build();
```

### Documents

```typescript
import { DocumentBuilder } from "@umbraco/json-models-builders";

const document = new DocumentBuilder()
  .withDocumentTypeId("document-type-id")
  .withParentId("parent-id")
  .addValue()
    .withAlias("title")
    .withValue("My Page Title")
    .done()
  .addVariant()
    .withCulture("en-US")
    .withName("English Version")
    .done()
  .build();
```

### Media Types & Media

```typescript
import { MediaTypeBuilder, MediaBuilder } from "@umbraco/json-models-builders";

const mediaType = new MediaTypeBuilder()
  .withName("Image Gallery")
  .withIcon("icon-pictures-alt")
  .build();

const media = new MediaBuilder()
  .withMediaTypeId("media-type-id")
  .addValue()
    .withAlias("umbracoFile")
    .withValue("/media/image.jpg")
    .done()
  .build();
```

### Member Types & Members

```typescript
import { MemberTypeBuilder, MemberBuilder } from "@umbraco/json-models-builders";

const memberType = new MemberTypeBuilder()
  .withName("Premium Member")
  .withIcon("icon-user")
  .build();

const member = new MemberBuilder()
  .withEmail("user@example.com")
  .withUsername("johndoe")
  .withPassword("SecurePassword123!")
  .withIsApproved(true)
  .build();
```

### Users & User Groups

```typescript
import { UserBuilder, UserGroupBuilder } from "@umbraco/json-models-builders";

const userGroup = new UserGroupBuilder()
  .withName("Content Editors")
  .withIcon("icon-users")
  .addSection("Umb.Section.Content")
  .withDocumentRootAccess(true)
  .build();

const user = new UserBuilder()
  .withName("John Doe")
  .withEmail("john@example.com")
  .addUserGroup("editor-group-id")
  .build();
```

### Webhooks

```typescript
import { WebhookBuilder } from "@umbraco/json-models-builders";

const webhook = new WebhookBuilder()
  .withName("Content Published")
  .withUrl("https://api.example.com/webhook")
  .withEnabled(true)
  .addHeader("Authorization", "Bearer token")
  .addEvent("Umbraco.ContentPublish")
  .build();
```

### Packages

```typescript
import { PackageBuilder } from "@umbraco/json-models-builders";

const package = new PackageBuilder()
  .withName("My Package")
  .addDocumentType("doc-type-id")
  .addDataType("data-type-id")
  .addTemplate("template-id")
  .build();
```

## Builder Method Conventions

All builders follow consistent naming conventions:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `with*()` | Set a property | `.withName("Title")` |
| `add*()` | Create and add a child builder | `.addProperty()` |
| `build()` | Construct the final JSON object | `.build()` |
| `done()` | Return to parent builder | `.done()` |

## Hierarchical Builders

Complex builders support nested child builders. Use `.done()` to return to the parent:

```typescript
const documentType = new DocumentTypeBuilder()
  .withName("Page")
  .addContainer()
    .withName("Content")
    .withType("Tab")
    .addProperty()
      .withName("Body")
      .withDataTypeId("rte-id")
      .done()  // Returns to container builder
    .done()    // Returns to document type builder
  .build();
```

## Project Structure

```
lib/
├── builders/
│   ├── dataTypes/          # 34+ data type builders
│   ├── document/           # Document and value builders
│   ├── documentBlueprints/ # Blueprint builders
│   ├── documentTypes/      # Document type builders
│   ├── media/              # Media builders
│   ├── mediaTypes/         # Media type builders
│   ├── member/             # Member builders
│   ├── memberTypes/        # Member type builders
│   ├── packages/           # Package builder
│   ├── userGroups/         # User group builders
│   ├── users/              # User builder
│   └── webhook/            # Webhook builder
├── helpers/
│   └── AliasHelper.ts      # Alias generation utilities
└── index.ts                # Main exports
```

## Contributing

We welcome contributions! If you find any model or builder missing, please create an issue or open a PR.

### Adding New Models/Builders

When adding new models/builders, remember to export them in the appropriate `index.ts` files:
- Export builders in `lib/builders/index.ts`
- Export models in their respective category folders

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```

### Testing Locally

1. Build and link the package:
   ```bash
   npm run build
   npm link
   ```
2. In your project directory:
   ```bash
   npm link @umbraco/json-models-builders
   ```

Now the package is available locally without publishing to npm.

## License

MIT

## Links

- [GitHub Repository](https://github.com/umbraco/Umbraco.JsonModels.Builders)
- [npm Package](https://www.npmjs.com/package/@umbraco/json-models-builders)
- [Umbraco CMS](https://umbraco.com)

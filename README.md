# ⚠️ DEPRECATED

This package has been deprecated. The builders have been moved into the Umbraco CMS acceptance test project.

**Please use [`@umbraco-cms/acceptance-test-helpers`](https://www.npmjs.com/package/@umbraco-cms/acceptance-test-helpers) instead.**

```bash
npm install @umbraco-cms/acceptance-test-helpers
```

---

# Umbraco.JsonModels.Builder

A TypeScript library that provides builders for creating JSON models used with the Umbraco CMS backoffice. This package implements the [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern) to simplify the creation of complex Umbraco configuration objects through a fluent API with sensible defaults.

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
  .addProperty()
    .withName("Title")
    .withDataTypeId("textstring-id")
    .withMandatory(true)
    .done()
  .build();
```

## Available Builders

### Document Types

```typescript
const documentType = new DocumentTypeBuilder()
  .withName("Article")
  .withAlias("article")
  .withIcon("icon-document")
  .withAllowedAsRoot(true)
  .withVariesByCulture(true)
  .addProperty()
    .withName("Title")
    .withDataTypeId("datatype-id")
    .withMandatory(true)
    .withMandatoryMessage("Title is required")
    .done()
  .addContainer()
    .withName("Content")
    .withType("Tab")
    .done()
  .build();
```

### Data Types

The library includes 38+ data type builders:

| Category | Builders |
|----------|----------|
| **Text** | `TextStringDataTypeBuilder`, `TextAreaDataTypeBuilder`, `MultipleTextStringDataTypeBuilder` |
| **Numbers** | `NumericDataTypeBuilder`, `DecimalDataTypeBuilder`, `SliderDataTypeBuilder` |
| **Boolean** | `TrueFalseDataTypeBuilder` |
| **Date/Time** | `DatePickerDataTypeBuilder`, `DateOnlyPickerDataTypeBuilder`, `TimeOnlyPickerDataTypeBuilder`, `DateTimePickerDataTypeBuilder`, `DateTimeWithTimeZonePickerDataTypeBuilder` |
| **Selection** | `DropdownDataTypeBuilder`, `CheckboxListDataTypeBuilder`, `RadioboxDataTypeBuilder`, `TagsDataTypeBuilder` |
| **Pickers** | `ContentPickerDataTypeBuilder`, `MultiNodeTreePickerDataTypeBuilder`, `MediaPickerDataTypeBuilder`, `EntityDataPickerDataTypeBuilder` |
| **Rich Content** | `TinyMCEDataTypeBuilder`, `TiptapDataTypeBuilder`, `MarkdownEditorDataTypeBuilder`, `CodeEditorDataTypeBuilder` |
| **Complex** | `BlockListDataTypeBuilder`, `BlockGridDataTypeBuilder`, `ImageCropperDataTypeBuilder`, `ListViewDataTypeBuilder` |
| **Other** | `LabelDataTypeBuilder`, `EmailAddressDataTypeBuilder`, `MultiUrlPickerDataTypeBuilder`, `UploadFieldDataTypeBuilder`, `ApprovedColorDataTypeBuilder` |

```typescript
const blockGrid = new BlockGridDataTypeBuilder()
  .withName("Page Layout")
  .addBlock()
    .withContentElementTypeKey("hero-element-key")
    .withLabel("Hero Section")
    .withAllowAtRoot(true)
    .done()
  .build();
```

### Documents & Value Builders

```typescript
import { DocumentBuilder, BlockListValueBuilder } from "@umbraco/json-models-builders";

const document = new DocumentBuilder()
  .withDocumentTypeId("document-type-id")
  .addValue()
    .withAlias("title")
    .withValue("My Page Title")
    .done()
  .addVariant()
    .withCulture("en-US")
    .withName("English Version")
    .done()
  .build();

// For complex property values
const blockListValue = new BlockListValueBuilder()
  .addContentData()
    .withContentTypeKey("element-key")
    .done()
  .build();
```

Also available: `BlockGridValueBuilder`, `MediaPickerValueBuilder`, `URLPickerValueBuilder`, `ImageCropperValueBuilder`

### Other Builders

| Builder | Purpose |
|---------|---------|
| `MediaTypeBuilder` / `MediaBuilder` | Media definitions and instances |
| `MemberTypeBuilder` / `MemberBuilder` | Member definitions and instances |
| `UserBuilder` / `UserGroupBuilder` | User management with granular permissions |
| `WebhookBuilder` | Webhook configuration |
| `PackageBuilder` | Package creation with all asset types |
| `DocumentBlueprintsBuilder` | Content templates |
| `DocumentDomainBuilder` | Multi-domain/culture configuration |

## Builder Conventions

| Method | Purpose |
|--------|---------|
| `with*()` | Set a property |
| `add*()` | Create and add a child builder |
| `build()` | Construct the final JSON object |
| `done()` | Return to parent builder |

## Contributing

We welcome contributions! If you find any model or builder missing, please create an issue or open a PR.

### Local Development

```bash
npm install
npm run build
```

### Testing Locally

```bash
npm run build
npm pack
# In your project:
npm install /path/to/umbraco-json-models-builders-2.0.42.tgz
```

## License

MIT

## Links

- [GitHub Repository](https://github.com/umbraco/Umbraco.JsonModels.Builders)
- [npm Package](https://www.npmjs.com/package/@umbraco/json-models-builders)
- [Umbraco CMS](https://umbraco.com)

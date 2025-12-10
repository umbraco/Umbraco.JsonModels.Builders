# Claude Code Guide for Umbraco.JsonModels.Builder

This document provides context and guidance for AI assistants working with this codebase.

## Project Overview

**Umbraco.JsonModels.Builder** (`@umbraco/json-models-builders`) is a TypeScript library implementing the Builder Pattern to create JSON models for Umbraco CMS backoffice entities. It provides a fluent API to construct complex configuration objects with sensible defaults.

**Version:** 2.0.x
**Package:** `@umbraco/json-models-builders`
**License:** MIT

## Key Concepts

### Builder Pattern
All builders follow this structure:
- Constructor initializes empty arrays and default values
- `with*()` methods set properties and return `this` for chaining
- `add*()` methods create child builders, add them to internal arrays, and return the child
- `done()` returns to the parent builder (for hierarchical structures)
- `build()` constructs and returns the final JSON object
- `getValues()` returns configuration array (DataTypeBuilder subclasses only)

### Hierarchical Builders
Parent-child relationships are common. Child builders store a reference to their parent:
```typescript
// Child builder stores reference to parent
constructor(parentBuilder: DocumentTypeBuilder) {
  this.parentBuilder = parentBuilder;
}

// done() returns to parent for continued chaining
done(): DocumentTypeBuilder {
  return this.parentBuilder;
}
```

## Project Structure

```
lib/
├── builders/
│   ├── dataTypes/           # Data type builders (extend DataTypeBuilder)
│   │   ├── approvedColorBuilder/   # Color picker sub-builders
│   │   ├── blockGridBuilder/       # Block grid sub-builders
│   │   ├── blockListBuilder/       # Block list sub-builders
│   │   ├── imageCropperBuilder/    # Image cropper sub-builders
│   │   ├── listViewBuilder/        # List view sub-builders
│   │   ├── mediaPickerBuilder/     # Media picker sub-builders
│   │   ├── multiNodeTreePickerBuilder/
│   │   ├── tinyMCEBuilder/         # TinyMCE sub-builders
│   │   ├── tiptapBuilder/          # Tiptap sub-builders
│   │   ├── dataTypeBuilder.ts      # Abstract base class
│   │   └── *.ts                    # Individual data type builders
│   ├── document/            # Document instance builders
│   │   ├── baseBlockValueBuilder/  # Base block value builders
│   │   ├── blockGridValueBuilder/  # Block grid value builders
│   │   ├── blockListValueBuilder/  # Block list value builders
│   │   ├── documentDomainBuilder/  # Domain/culture configuration
│   │   ├── imageCropperValueBuilder/
│   │   ├── mediaPickerValueBuilder/
│   │   └── urlPickerValueBuilder/
│   ├── documentBlueprints/  # Blueprint/template builders
│   ├── documentTypes/       # Document type definition builders
│   ├── media/               # Media instance builders
│   ├── mediaTypes/          # Media type definition builders
│   ├── member/              # Member instance builders
│   ├── memberTypes/         # Member type definition builders
│   ├── packages/            # Package builders
│   ├── userGroups/          # User group and permission builders
│   ├── users/               # User builders
│   └── webhook/             # Webhook builders
├── helpers/
│   └── AliasHelper.ts       # Alias generation utilities
└── index.ts                 # Main exports
```

## Important Files

| File | Purpose |
|------|---------|
| `lib/index.ts` | Main export file - all public builders must be exported here |
| `lib/builders/index.ts` | Aggregates all builder exports |
| `lib/builders/dataTypes/dataTypeBuilder.ts` | Abstract base class for all data type builders |
| `lib/helpers/AliasHelper.ts` | Utility for generating Umbraco-safe aliases |
| `package.json` | Package config, version, dependencies |
| `tsconfig.json` | TypeScript compiler configuration |
| `.azure/publish.yml` | CI/CD pipeline for npm publishing |

## Conventions

### Naming
- All builder classes end with `Builder` suffix
- Method prefixes:
  - `with*()` - Set a single property value
  - `add*()` - Create and add a child builder
  - `build()` - Construct the final JSON object
  - `done()` - Return to parent builder
  - `getValues()` - Return configuration array (DataTypeBuilder subclasses)
  - `getValue()` - Return single value (value builders)

### ID Generation
```typescript
if (!this.id) {
  const crypto = require('crypto');
  this.id = crypto.randomUUID();
}
```
- Always check if ID is null/undefined before generating
- Use Node.js `crypto.randomUUID()` for generating UUIDs

### Default Values
- Always provide sensible defaults in `build()` method
- Use pattern: `property: this.value || "default-value"`
- Use `false` as default for boolean properties
- Use empty string `""` for optional string properties
- Use `null` for optional object references
- Use `[]` for array properties

### Reference Objects
When referencing other entities, use the object format:
```typescript
parent: this.parentId ? { id: this.parentId } : null
folder: this.folderId ? { id: this.folderId } : null
collection: this.collectionId ? { id: this.collectionId } : null
```

### TypeScript Configuration
Key settings in `tsconfig.json`:
- `strict: true` - Strict type checking
- `strictPropertyInitialization: false` - Required for builder pattern
- `noImplicitAny: false` - Allows flexible typing
- `target: ESNext` - Modern JavaScript output
- `module: CommonJS` - Node.js compatible modules
- `composite: true` - For project references
- `isolatedModules: true` - For bundler compatibility

## AliasHelper Utility

The `AliasHelper` class provides methods for generating Umbraco-compatible aliases:

| Method | Description | Example |
|--------|-------------|---------|
| `toAlias(text)` | Converts to camelCase | `"My Type"` → `"myType"` |
| `toSafeAlias(text)` | Wraps in 'a' prefix/suffix | `"My Type"` → `"aMyTypea"` |
| `capitalize(text)` | Capitalizes first character | `"hello"` → `"Hello"` |
| `toCamelCase(text)` | Sentence to camelCase | `"My aWesome Example"` → `"myAwesomeExample"` |
| `uuidToAlias(uuid)` | Removes dashes from UUID | `"a1b2-c3d4"` → `"a1b2c3d4"` |

## Data Type Editor Aliases Reference

| Builder | Editor Alias | Editor UI Alias |
|---------|--------------|-----------------|
| TextStringDataTypeBuilder | `Umbraco.TextBox` | `Umb.PropertyEditorUi.TextBox` |
| TextAreaDataTypeBuilder | `Umbraco.TextArea` | `Umb.PropertyEditorUi.TextArea` |
| NumericDataTypeBuilder | `Umbraco.Integer` | `Umb.PropertyEditorUi.Integer` |
| DecimalDataTypeBuilder | `Umbraco.Decimal` | `Umb.PropertyEditorUi.Decimal` |
| TrueFalseDataTypeBuilder | `Umbraco.TrueFalse` | `Umb.PropertyEditorUi.Toggle` |
| DatePickerDataTypeBuilder | `Umbraco.DateTime` | `Umb.PropertyEditorUi.DatePicker` |
| DateOnlyPickerDataTypeBuilder | `Umbraco.DateOnly` | `Umb.PropertyEditorUi.DatePicker` |
| TimeOnlyPickerDataTypeBuilder | `Umbraco.TimeOnly` | `Umb.PropertyEditorUi.TimePicker` |
| DateTimePickerDataTypeBuilder | `Umbraco.DateTimeUnspecified` | `Umb.PropertyEditorUi.DatePickerWithTime` |
| DateTimeWithTimeZonePickerDataTypeBuilder | `Umbraco.DateTimeWithTimeZone` | `Umb.PropertyEditorUi.DatePickerWithTimeAndTimeZone` |
| DropdownDataTypeBuilder | `Umbraco.DropDown.Flexible` | `Umb.PropertyEditorUi.Dropdown` |
| ContentPickerDataTypeBuilder | `Umbraco.ContentPicker` | `Umb.PropertyEditorUi.DocumentPicker` |
| MediaPickerDataTypeBuilder | `Umbraco.MediaPicker3` | `Umb.PropertyEditorUi.MediaPicker` |
| MultiNodeTreePickerDataTypeBuilder | `Umbraco.MultiNodeTreePicker` | `Umb.PropertyEditorUi.ContentPicker` |
| TinyMCEDataTypeBuilder | `Umbraco.RichText` | `Umb.PropertyEditorUi.TinyMCE` |
| TiptapDataTypeBuilder | `Umbraco.RichText` | `Umb.PropertyEditorUi.Tiptap` |
| BlockListDataTypeBuilder | `Umbraco.BlockList` | `Umb.PropertyEditorUi.BlockList` |
| BlockGridDataTypeBuilder | `Umbraco.BlockGrid` | `Umb.PropertyEditorUi.BlockGrid` |
| ListViewDataTypeBuilder | `Umbraco.ListView` | `Umb.PropertyEditorUi.Collection` |
| TagsDataTypeBuilder | `Umbraco.Tags` | `Umb.PropertyEditorUi.Tags` |
| SliderDataTypeBuilder | `Umbraco.Slider` | `Umb.PropertyEditorUi.Slider` |
| ImageCropperDataTypeBuilder | `Umbraco.ImageCropper` | `Umb.PropertyEditorUi.ImageCropper` |

## Adding New Builders

### Steps
1. Create the builder class in the appropriate folder under `lib/builders/`
2. Follow existing builder patterns (study similar builders)
3. Export from the folder's `index.ts`
4. Export from `lib/builders/index.ts`
5. Export from `lib/index.ts`

### Data Type Builder Template
```typescript
import { DataTypeBuilder } from "./dataTypeBuilder";

export class MyDataTypeBuilder extends DataTypeBuilder {
  private myProperty?: string;
  private myNumber?: number;

  constructor() {
    super();
    this.editorAlias = "Umbraco.MyEditor";
    this.editorUiAlias = "Umb.PropertyEditorUi.MyEditor";
  }

  withMyProperty(value: string) {
    this.myProperty = value;
    return this;
  }

  withMyNumber(value: number) {
    this.myNumber = value;
    return this;
  }

  getValues() {
    return [
      { alias: "myProperty", value: this.myProperty || "default" },
      { alias: "myNumber", value: this.myNumber || 0 }
    ];
  }
}
```

### Entity Builder Template
```typescript
import { AliasHelper } from "../../helpers/AliasHelper";

export class MyEntityBuilder {
  id: string;
  name: string;
  alias: string;
  childBuilders: MyChildBuilder[] = [];

  constructor() {
    this.childBuilders = [];
  }

  withId(id: string) {
    this.id = id;
    return this;
  }

  withName(name: string) {
    this.name = name;
    return this;
  }

  withAlias(alias: string) {
    this.alias = alias;
    return this;
  }

  addChild() {
    const builder = new MyChildBuilder(this);
    this.childBuilders.push(builder);
    return builder;
  }

  build() {
    if (!this.id) {
      const crypto = require('crypto');
      this.id = crypto.randomUUID();
    }

    return {
      id: this.id,
      name: this.name || "",
      alias: this.alias || AliasHelper.toAlias(this.name),
      children: this.childBuilders.map(b => b.build())
    };
  }
}
```

### Child Builder Template
```typescript
export class MyChildBuilder {
  private parentBuilder: MyEntityBuilder;
  private value: string;

  constructor(parentBuilder: MyEntityBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withValue(value: string) {
    this.value = value;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  build() {
    return {
      value: this.value || ""
    };
  }
}
```

### Value Builder Template (for document property values)
```typescript
export class MyValueBuilder {
  private parentBuilder: DocumentValueBuilder;
  private data: string;

  constructor(parentBuilder: DocumentValueBuilder) {
    this.parentBuilder = parentBuilder;
  }

  withData(data: string) {
    this.data = data;
    return this;
  }

  done() {
    return this.parentBuilder;
  }

  getValue() {
    return {
      data: this.data || ""
    };
  }
}
```

## Common Tasks

### Adding a new property to an existing builder
1. Add property field to the class
2. Add `with*()` method that sets the property and returns `this`
3. Include the property in `build()` output with appropriate default

### Creating a new data type builder
1. Extend `DataTypeBuilder`
2. Set `editorAlias` and `editorUiAlias` in constructor
3. Implement `getValues()` to return configuration array
4. Add custom `with*()` methods for data type settings

### Adding export for a new builder
```typescript
// In the builder's folder index.ts
export * from "./myNewBuilder";

// In lib/builders/index.ts
export * from "./myCategory/index";

// In lib/index.ts (if not already covered)
export * from "./builders";
```

### Fixing build errors
1. Run `npm run build` to see TypeScript errors
2. Check `tsconfig.json` for compiler settings
3. Ensure all exports are properly chained through index files
4. Verify import paths are correct (use relative paths)

## Testing Locally

```bash
# Build the project
npm run build

# Create a tarball package
npm pack

# In your consuming project, install the tarball
npm install /path/to/umbraco-json-models-builders-2.0.42.tgz
```

## Build & Deploy

- **Build command:** `npm run build`
- **Output:** `dist/` folder
- **CI/CD:** Azure Pipelines (`.azure/publish.yml`)
- **Registry:** npm as `@umbraco/json-models-builders`
- **Main branch:** `main`
- **Development branch:** `v2/dev`

### CI/CD Pipeline Details
The Azure pipeline (`.azure/publish.yml`):
1. Triggers on `main` branch and `release/*` tags
2. Runs `npm ci` for clean dependency install
3. Builds with `npm run build`
4. Generates Software Bill of Materials (SBOM) using CycloneDX
5. Uploads BOM to Dependency-Track for security monitoring
6. Publishes to npm registry with public access

## Output Structure

The `build()` method returns a plain JavaScript object. Example output from `DocumentTypeBuilder`:

```json
{
  "alias": "myDocumentType",
  "name": "My Document Type",
  "description": "",
  "icon": "icon-document",
  "allowedAsRoot": false,
  "variesByCulture": false,
  "variesBySegment": false,
  "collection": null,
  "isElement": false,
  "properties": [],
  "containers": [],
  "allowedDocumentTypes": [],
  "compositions": [],
  "id": "generated-uuid",
  "folder": null,
  "allowedTemplates": [],
  "defaultTemplate": null,
  "cleanup": {
    "preventCleanup": false,
    "keepAllVersionsNewerThanDays": null,
    "keepLatestVersionPerDayForDays": null
  }
}
```

Example output from `DataTypeBuilder.build()`:

```json
{
  "editorAlias": "Umbraco.TextBox",
  "editorUiAlias": "Umb.PropertyEditorUi.TextBox",
  "id": "generated-uuid",
  "name": "My Text String",
  "parent": null,
  "values": [
    { "alias": "maxChars", "value": 500 }
  ]
}
```

## Quick Reference

### All Builder Categories
- **Document Types:** `DocumentTypeBuilder`, `DocumentTypePropertyBuilder`, `DocumentTypeContainerBuilder`, `DocumentTypeAllowedDocumentTypeBuilder`, `DocumentTypeCompositionBuilder`, `DocumentTypeAllowedTemplateBuilder`
- **Documents:** `DocumentBuilder`, `DocumentValueBuilder`, `DocumentVariantBuilder`
- **Document Values:** `BlockListValueBuilder`, `BlockGridValueBuilder`, `MediaPickerValueBuilder`, `URLPickerValueBuilder`, `ImageCropperValueBuilder`
- **Document Blueprints:** `DocumentBlueprintsBuilder`, `DocumentBlueprintsValueBuilder`, `DocumentBlueprintsVariantBuilder`
- **Document Domains:** `DocumentDomainBuilder`, `DocumentDomainValueBuilder`
- **Media Types:** `MediaTypeBuilder` and related property/container builders
- **Media:** `MediaBuilder`, `MediaValueBuilder`, `MediaVariantBuilder`
- **Member Types:** `MemberTypeBuilder` and related builders
- **Members:** `MemberBuilder`, `MemberValueBuilder`, `MemberVariantBuilder`
- **Users:** `UserBuilder`
- **User Groups:** `UserGroupBuilder`, `UserGroupPermissionBuilder`, `UserGroupDocumentPermissionBuilder`
- **Webhooks:** `WebhookBuilder`
- **Packages:** `PackageBuilder`
- **Data Types:** 38+ builders (see README for full list)

### Common Patterns
```typescript
// Simple builder
const result = new SomeBuilder()
  .withName("Name")
  .withProperty("value")
  .build();

// Nested builders
const result = new ParentBuilder()
  .withName("Parent")
  .addChild()
    .withName("Child")
    .done()
  .build();

// Multiple children
const result = new ParentBuilder()
  .addChild().withName("First").done()
  .addChild().withName("Second").done()
  .build();

// Data type with values
const dataType = new TextStringDataTypeBuilder()
  .withName("Title")
  .withMaxChars(200)
  .build();

// Complex nested structure (Block Grid)
const blockGrid = new BlockGridDataTypeBuilder()
  .withName("Layout")
  .addBlock()
    .withContentElementTypeKey("key")
    .addArea()
      .withAlias("main")
      .done()
    .done()
  .build();
```

## Gotchas and Edge Cases

1. **Property Validation:** DocumentTypePropertyBuilder supports `withMandatory()`, `withMandatoryMessage()`, `withRegEx()`, `withRegExMessage()` - don't forget these for required fields.

2. **Container Types:** DocumentTypeContainerBuilder `withType()` accepts "Tab" or "Group" - defaults to "Group".

3. **Composition Types:** DocumentTypeCompositionBuilder `withCompositionType()` defaults to "Composition".

4. **Webhook Methods:** Use `withHeader(name, value)` and `withEventAlias(alias)`, not `addHeader()` or `addEvent()`.

5. **User Groups:** Use `addUserGroupId()` for adding group references, not `addUserGroup()`.

6. **Block Grid Columns:** Use `addColumnSpanOptions(number)` to add column span options one at a time.

7. **Tiptap Extensions:** Has 14+ extensions with specific aliases - check `tiptapDataTypeBuilder.ts` for defaults.

8. **ListViewDataTypeBuilder:** Uses `Umb.PropertyEditorUi.Collection` as the UI alias, not `ListView`.

9. **Auto-generated Aliases:** If alias is not provided, it's auto-generated from name using `AliasHelper.toAlias()`.

10. **Crypto Import:** UUID generation uses `require('crypto')` inside the `build()` method, not a top-level import.

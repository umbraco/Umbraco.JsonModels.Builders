# Claude Code Guide for Umbraco.JsonModels.Builder

This document provides context and guidance for AI assistants working with this codebase.

## Project Overview

**Umbraco.JsonModels.Builder** (`@umbraco/json-models-builders`) is a TypeScript library implementing the Builder Pattern to create JSON models for Umbraco CMS backoffice entities. It provides a fluent API to construct complex configuration objects with sensible defaults.

## Key Concepts

### Builder Pattern
All builders follow this structure:
- Constructor initializes empty arrays and default values
- `with*()` methods set properties and return `this` for chaining
- `add*()` methods create child builders, add them to internal arrays, and return the child
- `done()` returns to the parent builder (for hierarchical structures)
- `build()` constructs and returns the final JSON object

### Hierarchical Builders
Parent-child relationships are common:
```typescript
// Child builder stores reference to parent
constructor(parentBuilder: DocumentTypeBuilder) {
  this.parentBuilder = parentBuilder;
}

// done() returns to parent
done(): DocumentTypeBuilder {
  return this.parentBuilder;
}
```

## Project Structure

```
lib/
├── builders/
│   ├── dataTypes/           # Data type builders (extend DataTypeBuilder)
│   ├── document/            # Document instance builders
│   ├── documentBlueprints/  # Blueprint builders
│   ├── documentTypes/       # Document type definition builders
│   ├── media/               # Media instance builders
│   ├── mediaTypes/          # Media type definition builders
│   ├── member/              # Member instance builders
│   ├── memberTypes/         # Member type definition builders
│   ├── packages/            # Package builders
│   ├── userGroups/          # User group builders
│   ├── users/               # User builders
│   └── webhook/             # Webhook builders
├── helpers/
│   └── AliasHelper.ts       # Alias generation utilities
└── index.ts                 # Main exports
```

## Important Files

- `lib/index.ts` - Main export file, all public builders must be exported here
- `lib/builders/index.ts` - Aggregates all builder exports
- `lib/builders/dataTypes/DataTypeBuilder.ts` - Abstract base class for all data type builders
- `lib/helpers/AliasHelper.ts` - Utility for generating Umbraco-safe aliases

## Conventions

### Naming
- All builder classes end with `Builder` suffix
- Method prefixes: `with*` (setters), `add*` (child builders), `build` (construct), `done` (return to parent)

### ID Generation
- Use `crypto.randomUUID()` for generating IDs
- IDs should be auto-generated if not explicitly provided

### Default Values
- Always provide sensible defaults in `build()` method
- Use pattern: `property: this.value || "default-value"`

### TypeScript
- Strict mode is enabled
- Target: ESNext
- Module: CommonJS
- Always include type annotations

## Adding New Builders

1. Create the builder class in the appropriate folder under `lib/builders/`
2. Follow existing builder patterns (study similar builders)
3. Export from the folder's `index.ts`
4. Export from `lib/builders/index.ts`
5. Export from `lib/index.ts`

### Data Type Builder Template
```typescript
import { DataTypeBuilder } from "./DataTypeBuilder";

export class MyDataTypeBuilder extends DataTypeBuilder {
  private myProperty?: string;

  constructor() {
    super();
    this.withEditorAlias("Umbraco.MyEditor");
    this.withEditorUiAlias("Umb.PropertyEditorUi.MyEditor");
  }

  withMyProperty(value: string): this {
    this.myProperty = value;
    return this;
  }

  getValues(): Array<{ alias: string; value: unknown }> {
    return [
      { alias: "myProperty", value: this.myProperty || "default" }
    ];
  }
}
```

### Entity Builder Template
```typescript
export class MyEntityBuilder {
  private id?: string;
  private name?: string;
  private childBuilders: MyChildBuilder[] = [];

  withId(id: string): this {
    this.id = id;
    return this;
  }

  withName(name: string): this {
    this.name = name;
    return this;
  }

  addChild(): MyChildBuilder {
    const builder = new MyChildBuilder(this);
    this.childBuilders.push(builder);
    return builder;
  }

  build() {
    return {
      id: this.id || crypto.randomUUID(),
      name: this.name || "Default Name",
      children: this.childBuilders.map(b => b.build())
    };
  }
}
```

## Common Tasks

### Adding a new property to an existing builder
1. Add private property field
2. Add `with*()` method that sets property and returns `this`
3. Include property in `build()` output with appropriate default

### Creating a new data type builder
1. Extend `DataTypeBuilder`
2. Set `editorAlias` and `editorUiAlias` in constructor
3. Implement `getValues()` to return configuration array
4. Add any custom `with*()` methods for data type settings

### Fixing build errors
- Run `npm run build` to compile TypeScript
- Check `tsconfig.json` for compiler settings
- Ensure all exports are properly chained through index files

## Testing Locally

```bash
npm run build
npm link
# In consuming project:
npm link @umbraco/json-models-builders
```

## Dependencies

- `camelize` - Used by AliasHelper for converting strings to camelCase aliases

## Build & Deploy

- Azure Pipelines handles CI/CD (`.azure/publish.yml`)
- Publishes to npm as `@umbraco/json-models-builders`
- Main branch: `main`
- Development branch: `v2/dev`

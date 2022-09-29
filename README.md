# Umbraco.JsonModels.Builder
This package contains the models and builders for the Umbraco backoffice!

## Prerequisites
This project was made with Node V16, so the minimum requirement is node `16.17.1`

## Getting started
You can import a builder in the top of your file like so:

```
import {  DocumentTypeBuilder} from "@umbraco/json-models-builders";
```

You can then use the imported builder to build a model:

```
const documentType = new DocumentTypeBuilder()
      .withName("My document type")
      .withAllowAsRoot(true)
      .build();
```

# Contributing to Umbraco.JsonModels.Builders
There are a few things to consider when contributing

## Adding new models/builders
When adding new models/builders, it is important to register the exports in the correct `index.ts` files!
Lets say you've added a new builder, remember to export it in the `lib/builders/index.ts` file.

## Testing your code
- Run `npm run build` & `npm link` in the root of this directory.
- Now the package is ready to be linked where-ever you are using it, without it having to be on npm!
- Run `npm link @umbraco/json-models-builders` in your directory where you are using this package.

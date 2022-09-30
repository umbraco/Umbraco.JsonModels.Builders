# Umbraco.JsonModels.Builder
Umbraco.JsonModels.Builder is a package made for use with Umbraco.
This package is meant to contain all the Umbraco backoffice models, and their corresponding builders. If you see any model/builder missing, please create an issue / open a PR for it yourself, we would love your contribution!

## What even is a builder?
Before we even get started, lets talk about what a builder is. We are using the [Builder pattern](https://en.wikipedia.org/wiki/Builder_pattern) here.
The builder is a class that creates a model, but you yourself can then use that builder to tweak the different properties.
If you take a look at the `DocumentTypeBuilder` you will see all these properties:

```
compositeContentTypes;
isContainer;
allowAsRoot;
allowedTemplates;
allowedContentTypes;
alias;
description;
thumbnail;
name;
id;
icon;
trashed;
key;
parentId;
path;
allowCultureVariant;
isElement;
defaultTemplate;
lockedCompositeContentTypes: any[];
historyCleanupPreventCleanup;
historyCleanupKeepAllVersionsNewerThanDays;
historyCleanupKeepLatestVersionPerDayForDays;
documentTypeGroupBuilders;
documentTypeHistoryCleanupBuilder;
```

This looks very daunting, what types are these properties, what values do you fill out? You could imagine this being a big process, every time you needed to create a document type.
Well the builder handles setting all of this for you! So all you would need to do, when using a builder to create a document type is: 
```
const documentType = new DocumentTypeBuilder()
      .build();
```
The builder will then fill out all the properties with default values!
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
      .build();
```

If you want to configure a property, like giving the document type a specific name, there are different methods for that, for changing the name, you can call the `withName()` method like so:
```
const documentType = new DocumentTypeBuilder()
      .withName("My document type")
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

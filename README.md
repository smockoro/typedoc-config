# typedoc-config

## Motivation
When you create a typescript project each time, you need to configure the following settings.

- TypeScript compilation settings
- Lint settings for ESLint
- TypeDoc settings

This is almost the same for all projects, so we want to use a common definition.

## Positioning of this repository

The following configuration files are commonized in this repository and imported in each project.

- `typedoc.js`

If necessary, individual projects can override the settings for their own projects.

## How to import

TypeDoc can use `extends`[^extends], so the following is imported in the user's configuration file.
The following example shows how to use `typedoc.json`.

[^extends]: https://typedoc.org/guides/options/#other-info

## How to publish common definitions

npm package and publish.

# License

MIT


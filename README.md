# Project 3 Starter

## Overview

You are not at all obligated to use this starter repo.

Here are some of the features/benefits of choosing to do so:

- Enforcement of best practices via linting and prettier standards. This will make your code look better for real life reviewers.
  It is also closer to how you would work in real life.
- A headless architecture with clear separation between the **client** and the **server**, while still working
  from one repo.
- `package.json` that includes most, if not all of what you will need to have installed, **including Mongoose**. Yes,
  considering that we didn't get to explore more about how MongoDB uses `$lookup` and/or how to do [schema
  validation](https://docs.mongodb.com/manual/core/schema-validation/), we are better off to just use Mongoose **for now**.
- Seedling directories for a suggested directory structure. This will also make it easier to work as a team and
  minimize occurrences of Git merge conflicts 🔀. Not to mention, it displays good use of the [Single Responsibility
  Principle (SRP)](https://g.co/kgs/AXwy4Z).

## Suggested Workflow

After getting all Agile stuff together, project proposal, group agreement, division of work, etc. and when you are ready to start coding...

1. Open [GraphQL Type Definitions](server/app/graphql/schema.js). This will be the contract for the front-end and the
   back-end.
2. Create a file (e.g. `.js`) in the [`db` directory](server/app/db). You will probably need multiple files, unless it
   makes sense for your data to be flat. Consider using Compass 🧭 with a spreadsheet to import export conveniently via
   CSV/JSON; or just type it all out manually 🤷🏾‍♂️. Just remember that you can't import `.json` without
   `--experimental-modules` 🇺🇳. It's probably simple to keep `.js` instead of `.json`. 👍🏾
3. Write some mock 🤡 resolvers.

Once this is all done, the front-end and back-end teams can split up and don't need to communicate 💬 until closer to
the end of the project, unless there are unexpected modifications to the GraphQL schema.

## Get Started

1. `code .` from **root** of this directory (where this file is located). This will ensure that VS Code settings (and
   extensions, but you probably already have those) will work properly.
2. **From another terminal instance**, `cd server; npm i; npm start;`.
3. **From yet another terminal instance**, `cd client; npm i; npm start;`.

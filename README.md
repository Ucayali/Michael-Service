# Project Name

> Item Details Module

## Related Projects

  - https://github.com/Ucayali/recommended-service
  - https://github.com/Ucayali/Review-Service
  - https://github.com/Ucayali/Michael-Service
  - https://github.com/Ucayali/Matt-Proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12!!!!!!!!!
  - 'nvm use lts' or 'nvm use 12'


## Development

- `npm run-script build` Runs webpack in dev mode
- `npm run start` Starts nodemon listening on port 3002
- `npm run-script seed` Seed the database
- `npm run test` Runs jest tests

### Installing Dependencies

From within the root directory:

```
npm update
npm install -g webpack
npm install
```

If running into syntax errors in seeding script or when starting check node version!!!!!

## CRUD Operations

|   Verb    |        Endpoint       |            Action            |
|-----------| --------------------- | ---------------------------- |
| **POST**  |       /api/items/      |  CREATE a new item into DB   |
| **GET**   |       /api/items/:id      |  READ data and return it     |
| **PATCH** |       /api/items/:id      |  UPDATE item with new review |
| **DELETE**|       /api/items/:id      |  DELETE item based on URL ID |

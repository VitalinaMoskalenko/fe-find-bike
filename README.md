# Find Bike

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Project displays list of bikes for selected location and to view bike details.

## How to run project

Install dependencies:

```sh
yarn
```

Start application:

App will run at http://localhost:3001/

```sh
yarn start
```

Command will perform all needed tests (TypeScript check, jest and eslint rules) that has to be `green` before pushing the code. (good to add as `pre-commit` command):

```sh
yarn sanity
```

Run all unit tests:

```sh
yarn test
```

Command will fix all eslint problems for you.. well... most of it :smile:

```sh
yarn lint:fix
```

## Project structure

- `src` -> is a main app folder
- - `assets` -> contains all images, fonts, used across the app
- - `components` -> contains all reusable components used across the app. Structure example:
- - - - `component/Button/index.tsx` - Source code
- - - - `components/__tests__/Button.(test | e2e).tsx` - Unit tests
- - `config` -> contains all configurations for the project ex. translations, style guide, environment variables
- - `lib` -> contains all the helper functions, custom hooks, validators that are used across the app. Example structure: `lib/validators`, `lib/hooks`
- - `pages` -> contain all navigation screens that can be displayed to the user
- - `services` -> contain all services that fetch specific data
- - `types` -> contain all the types used across the app

All modules are exported in `index.ts` to make the code cleaner and have a single place of import. ex. Every module contained in `types` folder is exported inside one parent `index.ts`.

This `import/export` method is called `Barrel` to read more about it: [Barrel Method Documentation](https://basarat.gitbook.io/typescript/main-1/barrel)

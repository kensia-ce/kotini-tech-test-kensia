## Kotini Tech Test - Frontend (Ken Sia) - Prompt

### Introduction

Think of this as an open-source project. How would this have to look in order for you to be impressed with it if you were to find it on GitHub?

Please spend at least 90 minutes on this test. Feel free to take more time if you wish - make sure you are happy with your submission!

Hint: we are looking for a high-quality submission with great application architecture. Not a "get it done" approach.

Hint: We want to give our users a great experience, consider this when styling the UI - we don't want plain html elements.... show us what you can do.

Hint: Remember that this test is your opportunity to show us how you think and what you know. Be clear about how you make decisions in your code, whether that is with comments, tests, or how you name things.

### Challenge

Create a "Loan to Value Calculator" that accepts a depositValue (int) and purchasePrice (int) as inputs. Use the below graphql API to fetch and display the result: https://gateway.kotini.co/graphql

## Running the app locally

First, install all npm packages

```bash
npm install
```

Then run the development version of the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

## Running the end-to-end test using Cypress

First, run the app on your [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

Then, open a new terminal and run the e2e script to Open Cypress (make sure cypress is installed)

```bash
npm run e2e
```

## Running the Static Code Analysis check

The project uses ESLint and Prettier to ensure code consistency, ESLint plugins and code styleguide used can be found in the follwing files.

```bash
.eslint.json
.prettier.rc
```

Run the ESLint check

```bash
npm run lint
```

## Learn More

### Frontend Tech Stack

- [Next.js](https://nextjs.org/docs) - React Framework using Typescript
- [Formik](https://formik.org/) - Form Library
- [Yup](https://github.com/jquense/yup) - Form Validation
- [Axios](https://axios-http.com/docs/intro) - HTTP Client
- [Cypress](https://www.cypress.io/) - End-to-End Testing

### File Structure

- `.next` (this contains the built files after running `npm run build` command)
- `.vscode` (this contains project specific ESLint and prettier configuration for VS Code)
- `cypress` (this contains all e2e specs and config)
- `public` (this contains the assets/images being used in the app)
- `src` (main source code)
  - `components` (this contains the react functional components)
  - `pages` (this contains pages which is by default serves as the routing since Nextjs uses file-system based routing)
  - `services` (this contains services that will interact with the GraphQL API)
  - `styles` (this contains the global styles for the app, since the app is just 1 component for now)

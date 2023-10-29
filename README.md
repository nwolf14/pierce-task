# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

1. Node_Modules

```
npm i
```

2. Create environment file:

Copy and rename file `.env.default` to `.env`

3. Install Husky

```
npm run prepare
```

## Launch

```
npm run dev
```

## Run test suites

```
npm test
```

## Designing real production application:

I tried to prepare the above task in a way as close as possible to production conditions. To create the project, I used the `Vite` environment because it is much lighter and faster compared to `create-react-app`. Additionally, I manually configured tools such as `husky`, `jest`, `eslint`, `stylelint`, and `commitlint`.

Here's what I would do differently in normal production conditions, including but not limited to:

- Adding metadata to the page.
- Creating a `Docker` image to facilitate easy application deployment using `CI/CD`.
- Adding test coverage for every file, creating unit tests for code containing business logic, and behavioral tests for testing components themselves.
- Developing a library of custom components using `Storybook` instead of relying on libraries like Material-UI.
- Depending on the application's complexity, deciding whether or not to use the `redux/flux` architecture to manage the application state.
- Implementing `Server Side Rendering` for applications where `SEO` is important.
- Eagerly adding offline mode support using `PWA` and `Service Workers`. Utilizing packages like `Workbox` and caching strategies such as `Cache on Demand, Cache then Network, Cache with Network Fallback, or Network with Cache fallback` for different types of application resources. Also, leveraging features like `Background Sync` to ensure comprehensive offline mode support. The benefits of this approach would include not only offline mode support but also extremely fast application loading times, as all resources would be stored on the client device.
- Depending on the application's scale, considering a `mono` or `multi-repo` architecture.
- In the case of a multi-repo architecture, creating a separate repository containing all elements of the design system along with tools like `Storybook`` for reviewing all components. Also, contemplating the implementation of microfrontends architecture.
- To optimize application loading speed, utilizing techniques such as:
  - Tree shaking
  - Lazy loading images using the `lazy` attribute
  - Adjusting image sizes based on the device's resolution using the `srcset` attribute
  - Splitting JavaScript code into smaller pieces and loading them as users navigate to new pages
  - Enabling the `HTTP 2` protocol on the server

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

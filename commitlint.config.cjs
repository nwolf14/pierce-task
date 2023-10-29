module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'header-max-length': [0], // level: disabled
    'subject-empty': [0, 'never'],
    'type-empty': [0, 'never'],
    'function-rules/header-max-length': [
      2, // level: error
      'always',
      (parsed) => {
        const regex = new RegExp(/^feat|fix|chore|: ([a-z- ]{1,})$/);

        if (regex.test(parsed.header)) {
          return [true];
        }

        return [false, 'The name of the commit must look according to the formula: feat|fix|chore: <message>.'];
      },
    ],
  },
};

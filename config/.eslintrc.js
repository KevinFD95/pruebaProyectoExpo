// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier'
  ],
  ignorePatterns: ['/dist/*'],
  plugins: ["eslint", "prettier"],
  rules: {
    'prettier': ['error'],
  }
};

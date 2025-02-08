// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo', 'prettier'
  ],
  ignorePatterns: ['/dist/*'],
  plugins: ["eslint", "prettier"],
  rules: {
    'prettier/prettier': ['error'],
  }
};

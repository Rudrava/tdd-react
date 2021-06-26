module.exports = {
  extends: ["codingitwrong"],
  parser: "babel-eslint",
  plugins: ["jest", "react"],
  env: {
    browser: true,
    "jest/globals": true,
    node: true,
  },
  rules: {
    semi: ["error", "always"],
    "comma-dangle": ["off", "only-multiline"],
  },
};

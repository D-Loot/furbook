module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "xo",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "capitalized-comments": "off",
    "new-cap": "off",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "padding-line-between-statements": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "commonjs",
  },
  plugins: ["prettier", "mocha/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
};

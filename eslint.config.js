import eslint from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".output/**",
      ".tanstack/**",
      ".wrangler/**",
    ],
  },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  eslint.configs.recommended,
  prettier,
  {
    files: ["src/**/*.{js,jsx}"],
    rules: {
      "no-unused-vars": "off",
    },
  },
];

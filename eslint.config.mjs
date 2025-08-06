import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended", prettier],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
      },
    },
  },
]);

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error", // Show prettier errors in ESLint
    "react/react-in-jsx-scope": "off", // Not needed with Vite/React 17+
  },
};

import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";

export default [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        ignores: ["node_modules", "dist"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: {
            "@typescript-eslint": eslintPluginTypeScript,
            react: eslintPluginReact,
            prettier: eslintPluginPrettier,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [
                "warn",
                { extensions: [".js", ".jsx", ".ts", ".tsx"] },
            ],
            "react/prop-types": "off",
            "prettier/prettier": "error",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];

import pluginJs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin';
import { configs as wdioConfig } from "eslint-plugin-wdio";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["tests/**/*.{js,ts}"] },
    {
        ignores: ["node_modules", "allure-results", "allure-report", "eslint.config.mjs"],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    wdioConfig['flat/recommended'],
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    {
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            ...stylistic.configs['flat/recommended'],
            '@stylistic/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            '@stylistic/indent': [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],
            'semi': [
                'error',
                'always',
                {
                    omitLastInOneLineBlock: true,
                    omitLastInOneLineClassBody: true,

                }
            ]
        }
    }
];
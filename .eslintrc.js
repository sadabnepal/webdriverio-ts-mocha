module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'plugins': [
        '@typescript-eslint',
        'wdio'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:wdio/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': './tsconfig.json',
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '.js',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true
            }
        ],
        'camelcase': [
            'error',

            {
                properties: 'always',
                ignoreDestructuring: false,
                ignoreImports: false,
                allow: ['^CONSTANT_']
            }
        ],
        'indent': [
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
        ],
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false
            }
        ],
        'require-await': [
            'error'
        ]
    },
    'ignorePatterns': ['node_modules', 'allure-results', 'allure-report']
};

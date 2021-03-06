module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
        include: [
            "./**/*.ts",
            "./**/*.vue",
            ".eslintrc.js"
        ],
        extraFileExtension: [
            ".vue",
            ".js"
        ]
    },
    plugins: [
        "@typescript-eslint",
        "prefer-arrow",
    ],
    rules: {
        "@typescript-eslint/typedef": "error",
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": "warn",
        "@typescript-eslint/ban-types": "warn",
        // "@typescript-eslint/class-name-casing": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/triple-slash-reference": "warn",
        "@typescript-eslint/unified-signatures": "warn",
        camelcase: "warn",
        complexity: "off",
        "constructor-super": "warn",
        "dot-notation": "error",
        eqeqeq: "error",
        "guard-for-in": "warn",
        "id-blacklist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined",
        ],
        "id-match": "warn",
        "max-classes-per-file": [
            "warn",
            99999,
        ],
        "max-len": [
            "warn",
            {
                code: 713,
            },
        ],
        "new-parens": "warn",
        "no-caller": "warn",
        "no-cond-assign": "warn",
        "no-console": [
            "warn",
            {
                allow: [
                    "log",
                    "warn",
                    "dir",
                    "time",
                    "timeEnd",
                    "timeLog",
                    "trace",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "info",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context",
                ],
            },
        ],
        "no-debugger": "warn",
        "no-empty": [
            "error",
            {
                allowEmptyCatch: true,
            },
        ],
        "no-eval": "warn",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-new-wrappers": "warn",
        "no-restricted-syntax": [
            "warn",
            "ForInStatement",
        ],
        "no-shadow": [
            "warn",
            {
                hoist: "all",
            },
        ],
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef-init": "warn",
        "no-unsafe-finally": "warn",
        "no-unused-expressions": "warn",
        "no-unused-labels": "warn",
        "no-var": "error",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never",
        ],
        "prefer-arrow/prefer-arrow-functions": "warn",
        "prefer-const": "error",
        "quote-props": [
            "warn",
            "as-needed",
            {
                keywords: true,
                unnecessary: true,
                numbers: false,
            },
        ],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: false,
            },
        ],
        radix: "warn",
        "space-before-function-paren": "off",
        "spaced-comment": "warn",
        "use-isnan": "warn",
        "valid-typeof": "off",
        "@typescript-eslint/no-extra-parens": "error",
        "no-misleading-character-class": "error",
        "no-template-curly-in-string": "error",
        "require-atomic-updates": "error",
        curly: "error",
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        "linebreak-style": [
            0,
            "windows",
        ],
        semi: [
            "error",
            "always",
        ],
        "no-unused-vars": [
            1,
        ],
        "no-redeclare": [
            1,
        ],
        "no-unreachable": [
            1,
        ],
        "no-inner-declarations": [
            0,
        ],
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "no-else-return": "error",
        "no-extra-bind": "error",
        "no-labels": "error",
        "no-floating-decimal": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-multi-spaces": "error",
        "no-param-reassign": "error",
        strict: [
            "error",
            "safe",
        ],
        quotes: [
            1,
            "double",
            {
                avoidEscape: true,
            },
        ],
        "arrow-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
        "prefer-arrow-callback": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "prefer-rest-params": "error",
        "prefer-exponentiation-operator": "error",
        "require-await": "error",
    },
    globals: {
        swal: "readonly",
    },
};

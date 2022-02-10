module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json'
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        '@typescript-eslint/no-non-null-assertion': "off",
        "no-empty-function": 1,
        "no-named-as-default": 0,
        "no-unused-expressions": 0,
        "import/no-cycle": [0, { ignoreExternal: true }],
        "import/prefer-default-export": 0,
        "react/jsx-uses-react": "off",
        "react/no-array-index-key": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "semi": 0,
        "comma-dangle": 0,
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react/react-in-jsx-scope": "off",
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
    },
    "overrides": [
        {
            /**Disable no param assignment due to project usinng Immer library/Redux Toolkit */
            "files": ["src/store/**/*"],
            "rules": {
                "no-param-reassign": 0
            }
        }
    ],
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            },
            "typescript": {
                "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

                // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

                // use <root>/path/to/folder/tsconfig.json
                "project": "./tsconfig.json",

            }
        }
    }
}

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/prop-types": 0
    },
    "settings": {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        }
    }
}

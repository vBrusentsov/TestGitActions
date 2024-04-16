module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true,
        jasmine: true,
        jest: true,
    },
    parserOptions: { ecmaVersion: 2018 },
    overrides: [
        {
            files: ['*.js'],
            plugins: ['no-jquery'],
            rules: {
                indent: [
                    'error',
                    4,
                    { SwitchCase: 1 },
                ],
                'linebreak-style': ['error', 'unix'],
                quotes: ['error', 'single'],
                semi: ['error', 'always'],
                'no-unused-vars': ['error', { vars: 'local' }],
                'no-plusplus': 'off',
                'no-cond-assign': ['error', 'always'],
                eqeqeq: ['warn', 'smart'],

                // disable rules from base configurations
                'no-console': 'off',
                'no-alert': 'off',
                'func-names': 'off',
                'block-scoped-var': 'error',
                'guard-for-in': 'error',
                'no-loop-func': 'error',
                'no-self-compare': 'error',
                'no-unneeded-ternary': 'error',
                'import/prefer-default-export': 'off',
                'import/extensions': 'off',
                'no-underscore-dangle': 'off',
                'class-methods-use-this': 'off',
                'no-param-reassign': ['error', { props: false }],

                'no-jquery/no-other-methods': 'error',
                'no-jquery/no-other-utils': 'error',
                'no-jquery/no-jquery-constructor': 'error',
                'no-jquery/no-animate': 'error',
                'no-jquery/no-bind': 'error',
                'no-jquery/no-class': 'error',
                'no-jquery/no-closest': 'error',
                'no-jquery/no-delegate': 'error',
                'no-jquery/no-each-collection': 'error',
                'no-jquery/no-event-shorthand': 'error',
                'no-jquery/no-fade': 'error',
                'no-jquery/no-find-collection': 'error',
                'no-jquery/no-has': 'error',
                'no-jquery/no-html': 'error',
                'no-jquery/no-is': 'error',
                'no-jquery/no-live': 'error',
                'no-jquery/no-load': 'error',
                'no-jquery/no-map-collection': 'error',
                'no-jquery/no-parent': 'error',
                'no-jquery/no-parents': 'error',
                'no-jquery/no-ready-shorthand': 'error',
                'no-jquery/no-serialize': 'error',
                'no-jquery/no-size': 'error',
                'no-jquery/no-slide': 'error',
                'no-jquery/no-trigger': 'error',
                'no-jquery/no-val': 'error',
                'no-jquery/no-visibility': 'error',
                'no-jquery/no-wrap': 'error',
                'no-jquery/no-ajax': 'error',
                'no-jquery/no-camel-case': 'error',
                'no-jquery/no-contains': 'error',
                'no-jquery/no-deferred': 'error',
                'no-jquery/no-each-util': 'error',
                'no-jquery/no-error': 'error',
                'no-jquery/no-escape-selector': 'off',
                'no-jquery/no-extend': 'error',
                'no-jquery/no-find-util': 'error',
                'no-jquery/no-global-eval': 'error',
                'no-jquery/no-grep': 'error',
                'no-jquery/no-hold-ready': 'error',
                'no-jquery/no-in-array': 'error',
                'no-jquery/no-is-array': 'error',
                'no-jquery/no-is-empty-object': 'error',
                'no-jquery/no-is-function': 'error',
                'no-jquery/no-is-numeric': 'error',
                'no-jquery/no-is-plain-object': 'error',
                'no-jquery/no-is-window': 'error',
                'no-jquery/no-map-util': 'error',
                'no-jquery/no-merge': 'error',
                'no-jquery/no-node-name': 'error',
                'no-jquery/no-noop': 'error',
                'no-jquery/no-now': 'error',
                'no-jquery/no-param': 'error',
                'no-jquery/no-parse-html': 'error',
                'no-jquery/no-parse-json': 'error',
                'no-jquery/no-parse-xml': 'error',
                'no-jquery/no-proxy': 'error',
                'no-jquery/no-trim': 'error',
                'no-jquery/no-type': 'error',
                'no-jquery/no-unique': 'error',
                'no-jquery/no-when': 'error',
                'no-jquery/no-attr': 'error',
                'no-jquery/no-clone': 'error',
                'no-jquery/no-css': 'error',
                'no-jquery/no-data': 'error',
                'no-jquery/no-filter': 'error',
                'no-jquery/no-prop': 'error',
                'no-jquery/no-sub': 'error',
                'no-jquery/no-text': 'error',
            },
        },
        {
            files: ['*.html'],
            plugins: ['@html-eslint'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
            rules: {
                '@html-eslint/require-img-alt': 'off',
                '@html-eslint/require-button-type': 'error',
                '@html-eslint/no-multiple-empty-lines': ['error', { max: 1 }],
                '@html-eslint/require-li-container': 'off', // don't work with li in template tag
                '@html-eslint/element-newline': 'error',
            },
        },
        {
            files: ['*.component.html'],
            rules: {
                '@html-eslint/require-doctype': 'off',
            },
        },
    ],
};
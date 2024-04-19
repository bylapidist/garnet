module.exports = {
    plugins: ['stylelint-no-unsupported-browser-features'],
    extends: ['stylelint-config-recommended', 'stylelint-config-css-modules'],
    rules: {
        'at-rule-no-unknown': null,
        'custom-property-pattern': null,
    },
    ignoreFiles: ['node_modules', 'dist'],
};

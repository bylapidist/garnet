const StyleDictionary = require('style-dictionary');

/**
 * Build a CSS platform with specified source, destination, and selector.
 * @param {string} sourcePath - Source path pattern for token files.
 * @param {string} destination - Destination file name for the CSS output.
 * @param {string} [selector] - CSS selector for scoping variables.
 */
const buildCssPlatform = (sourcePath, destination, selector = '') => {
    StyleDictionary.extend({
        source: [sourcePath],
        platforms: {
            css: {
                transformGroup: 'css',
                buildPath: 'dist/',
                files: [
                    {
                        destination,
                        format: 'css/variables',
                        options: {
                            outputReferences: true,
                            selector,
                        },
                    },
                ],
            },
        },
    }).buildAllPlatforms();
};

// Build the core design tokens (e.g. size, breakpoints, fractions)
buildCssPlatform('core/**/*.cjs', 'core.css');

// Build the light and dark specific tokens
buildCssPlatform('theme/light/**/*.cjs', 'light.css', '.theme-light');
buildCssPlatform('theme/dark/**/*.cjs', 'dark.css', '.theme-dark');

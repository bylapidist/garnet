const fs = require('fs').promises;
const path = require('path');
const glob = require('fast-glob');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSorting = require('postcss-sorting');
const postcssImport = require('postcss-import');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

async function buildStyles(inputPath, outputPath) {
    try {
        const css = await fs.readFile(inputPath, 'utf8');
        const result = await postcss([
            autoprefixer,
            postcssNested,
            postcssPresetEnv,
            postcssSorting,
            postcssImport,
        ]).process(css, { from: inputPath, to: outputPath });
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, result.css);
        console.log(`✔️ Built ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

async function buildComponentStyles(componentName) {
    const input = path.join(
        srcDir,
        'components',
        componentName,
        `${componentName}.module.css`,
    );
    const output = path.join(
        distDir,
        'components',
        `${componentName}.module.css`,
    );
    await buildStyles(input, output);
}

async function buildGlobalStyles() {
    const input = path.join(srcDir, 'global.css');
    const output = path.join(distDir, 'global.css');
    await buildStyles(input, output);
}

(async () => {
    const componentDirectories = await glob('components/*/', {
        cwd: srcDir,
        onlyDirectories: true,
    });

    for (const componentDir of componentDirectories) {
        const componentName = path.basename(componentDir);
        await buildComponentStyles(componentName);
    }

    await buildGlobalStyles();
})();

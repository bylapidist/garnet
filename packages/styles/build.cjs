const fs = require('fs').promises;
const path = require('path');
const glob = require('fast-glob');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSorting = require('postcss-sorting');
const postcssImport = require('postcss-import');
const postcssExtend = require('postcss-extend');
const postcssEach = require('postcss-each');
const postcssReporter = require('postcss-reporter');
const stylelint = require('stylelint');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

async function buildStyles({ inputPath, outputPath }) {
    try {
        const css = await fs.readFile(inputPath, 'utf8');
        const result = await postcss([
            autoprefixer,
            postcssImport({
                plugins: [stylelint],
            }),
            postcssNested,
            postcssPresetEnv,
            postcssSorting,
            postcssExtend,
            postcssEach,
            postcssReporter({ clearReportedMessages: true }),
        ]).process(css, { from: inputPath, to: outputPath });
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, result.css);
        console.log(`✔️ Built ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

async function getComponents() {
    const cssFilePaths = await glob('components/*.module.css', {
        cwd: srcDir,
        onlyFiles: true,
    });
    return cssFilePaths.map((filePath) => {
        const [basename] = path.basename(filePath).split('.module.css');
        return basename;
    });
}

(async () => {
    const components = await getComponents();

    for (const componentName of components) {
        await buildStyles({
            inputPath: path.join(
                srcDir,
                'components',
                `${componentName}.module.css`,
            ),
            outputPath: path.join(
                distDir,
                'components',
                `${componentName}.module.css`,
            ),
        });
    }

    await buildStyles({
        inputPath: path.join(srcDir, 'global.css'),
        outputPath: path.join(distDir, 'global.css'),
    });
})();

module.exports = function(api, opts) {
    const {
        commonjs,
        runtime,
        transformRuntimeOption = {
            corejs: {
                version: 3,
                proposals: true
            }
        }
    } = opts || {};
    const plugins = [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-json-strings",
        [
            "@babel/plugin-proposal-decorators",
            { decoratorsBeforeExport: true }
        ],
        "@babel/plugin-proposal-class-properties",
        [
            '@babel/proposal-object-rest-spread',
            { loose: true }
        ],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-logical-assignment-operators",
        "@babel/plugin-proposal-optional-chaining",
        [
            "@babel/plugin-proposal-pipeline-operator",
            {
                "proposal": "minimal"
            }
        ],
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-do-expressions",
        "@babel/plugin-proposal-function-bind"
    ];
    if (commonjs) {
        plugins.push('@babel/transform-modules-commonjs');
    }
    if (runtime) {
        plugins.push([
            "@babel/plugin-transform-runtime",
            transformRuntimeOption
        ]);
    }
    return {
        plugins: plugins
    };
}
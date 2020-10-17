const PresetCollection = require('./index');

const commonjs = '@babel/transform-modules-commonjs';
const runtime = '@babel/plugin-transform-runtime';
describe('default', () => {
    test('normal', () => {
        const preset = PresetCollection();
        expect(preset.plugins.indexOf(commonjs)).toBe(-1);
    });

    test('has commonjs', () => {
        const preset = PresetCollection(null, {
            commonjs: true
        });
        const res = preset.plugins.indexOf(commonjs) > -1;
        expect(res).toBeTruthy();
    });

    test('has runtime', () => {
        const preset = PresetCollection(null, {
            runtime: true
        });
        let res;
        preset.plugins.forEach((item) => {
            if (Array.isArray(item) && item[0] === runtime) {
                res = item;
            }
        });
        expect(res[0]).toBe(runtime);
        expect(res[1]).toEqual({
            corejs: {
                version: 3,
                proposals: true
            }
        });
    });

    test('has runtime', () => {
        const preset = PresetCollection(null, {
            runtime: true,
            transformRuntimeOption: {
                corejs: 2
            }
        });
        let res;
        preset.plugins.forEach((item) => {
            if (Array.isArray(item) && item[0] === runtime) {
                res = item;
            }
        });
        expect(res[1]).toEqual({
            corejs: 2
        });
    });
});
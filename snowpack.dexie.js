/* eslint-disable */
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'src/dexie': { url: '/', resolve: true, static: false }
  },
  packageOptions: {
    source: 'local'
  },
  devOptions: {},
  buildOptions: {
    out: 'dist/dexie',
    sourcemap: false,
    clean: false
  },
  optimize: {
    target: 'es2020',
    entrypoints: ['src/dexie/index.ts'],
    minify: true,
    sourcemap: false,
    bundle: true
  },
  plugins: []
};

/* eslint-disable */
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/', resolve: true, static: false }
  },
  packageOptions: {
    source: 'local'
  },
  devOptions: {},
  buildOptions: {
    out: 'dist',
    sourcemap: false,
    clean: false
  },
  optimize: {
    target: 'es2020',
    entrypoints: ['src/index.ts'],
    minify: true,
    sourcemap: false,
    bundle: false
  },
  plugins: []
};

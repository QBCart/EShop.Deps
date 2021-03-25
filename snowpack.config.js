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
    sourcemap: false
  },
  optimize: {
    target: 'es2020',
    entrypoints: ['src/react/index.ts'],
    minify: true,
    sourcemap: false,
    bundle: true
  },
  plugins: []
};

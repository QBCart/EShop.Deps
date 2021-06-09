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
    out: 'publish_esm',
    sourcemap: false,
    clean: true,
    metaUrlPath: '.'
  },
  optimize: {
    target: 'es2020',
    minify: true,
    sourcemap: false
  },
  plugins: [
    ['@snowpack/plugin-sass', { compilerOptions: { loadPath: 'node_modules' } }]
  ]
};

// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: '14' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
  ],
};

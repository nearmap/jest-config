module.exports = {
  // Common to all envs below.
  plugins: [],

  presets: [
    ['@babel/preset-env', {
      useBuiltIns: false,
      targets: {
        node: 'current'
      }
    }]
  ]
};

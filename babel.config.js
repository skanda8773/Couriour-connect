module.exports = {
  // nativewind provides a preset-style export; include it in `presets` so Babel
  // treats it correctly. Previously it was in `plugins` which caused:
  // ".plugins is not a valid Plugin property"
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
};

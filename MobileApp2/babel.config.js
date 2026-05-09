module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // السطر ده هو اللي هيخلي السايد بار يظهر ويتحرك
      'react-native-reanimated/plugin', 
    ],
  };
};
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

module.exports = withNativeWind(wrapWithReanimatedMetroConfig(config), {
  input: "./global.css",
});


// ////////////


// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */

// const {getDefaultConfig} = require('expo/metro-config');
// const {mergeConfig} = require('@react-native/metro-config');
// const path = require('path');
// const {
//   wrapWithReanimatedMetroConfig,
// } = require('react-native-reanimated/metro-config');

// const config = async () => {
//   const defaultConfig = await getDefaultConfig(__dirname);
//   const {
//     resolver: {sourceExts, assetExts},
//   } = defaultConfig;
//   return wrapWithReanimatedMetroConfig(
//     mergeConfig(defaultConfig, {
//       transformer: {
//         getTransformOptions: async () => ({
//           transform: {
//             experimentalImportSupport: false,
//             inlineRequires: true,
//           },
//         }),
//         babelTransformerPath: require.resolve('react-native-svg-transformer'),
//       },
//       resolver: {
//         extraNodeModules: {
//           src: path.resolve(__dirname, 'src'),
//         },
//         assetExts: assetExts.filter(ext => ext !== 'svg'),
//         sourceExts: [...sourceExts, 'svg'],
//       },
//       watchFolders: [path.resolve(__dirname, 'src')],
//     }),
//   );
// };

// module.exports = config;

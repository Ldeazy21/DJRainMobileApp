/**
 * Metro configuration for React Native with svg support
 * https://github.com/facebook/react-native
 *
 * @format
 */

//  const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts }
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer")
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== "svg"),
//       sourceExts: [...sourceExts, "svg"]
//     }
//   };
// })();

//  module.exports = (async () => {
//    const {
//      resolver: { sourceExts, assetExts },
//    } = await getDefaultConfig();

//    return {
//      transformer: {
//        babelTransformerPath: require.resolve('react-native-svg-transformer'),
//        getTransformOptions: async () => ({
//          transform: {
//            experimentalImportSupport: false,
//            inlineRequires: false,
//          },
//        }),
//      },
//      resolver: {
//        assetExts: assetExts.filter(ext => ext !== 'svg'),
//        sourceExts: [...sourceExts, 'svg'],
//      },
//    };
//  })();

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
};

module.exports = mergeConfig(defaultConfig, config);

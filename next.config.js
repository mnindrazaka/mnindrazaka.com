const { withTamagui } = require("@tamagui/next-plugin");

process.env.TAMAGUI_TARGET = "web";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = function (name, { defaultConfig }) {
  let config = {
    ...defaultConfig,
    ...nextConfig,
  };

  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
    useReactNativeWebLite: true,
    disableExtraction: process.env.NODE_ENV === "development",
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};

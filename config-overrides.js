const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
  webpack: function (config, env) {
    // ...add your webpack config
    config["plugins"].push(
      new NodePolyfillPlugin({
        excludeAliases: ["console"],
      })
    );
    config["resolve"] = {
      ...config["resolve"],
      fallback: {
        path: require.resolve("path-browserify"),
        stream: require.resolve("stream-browserify"),
        os: require.resolve("os-browserify"),
      },
    };
    return config;
  },
};

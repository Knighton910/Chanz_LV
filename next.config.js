// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|mp4)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/sounds",
          outputPath: "static/sounds",
        },
      },
    });
    return config;
  },
};

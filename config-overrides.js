const webpack = require("webpack");

module.exports = {
  webpack: (config, env) => {
    if (config.mode === "production") {
      config.plugins.forEach((plugin) => {
        if (plugin.constructor.name === "HtmlWebpackPlugin") {
          plugin.options.publicPath = "/build/";
          plugin.options.filename = `../${plugin.options.filename}`;
          return true;
        }
      });
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        GLOBAL_VARS: JSON.stringify({
          THEME_CACHE_KEY: "themeName",
          TITLE: "Morteza Jamali's Portfolio",
          PACKAGE: {
            HOME_PAGE:
              "https://github.com/morteza-jamali/morteza-jamali.github.io.git#readme",
          },
        }),
      })
    );

    return config;
  },
};

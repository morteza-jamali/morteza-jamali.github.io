const webpack = require("webpack");

module.exports = {
  webpack: (config, env) => {
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

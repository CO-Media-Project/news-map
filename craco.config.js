const path = require("path");

module.exports = {
  webpack: {
    configure: (config) => {
      // Treat Mapbox worker as an asset, not JS
      config.module.rules.unshift({
        test: /mapbox-gl.*worker.*\.js$/,
        type: "asset/resource",
      });

      // Dont let Babel touch mapbox-gl
      const oneOf = config.module.rules.find(r => Array.isArray(r.oneOf));

      if (oneOf) {
        oneOf.oneOf.forEach((rule) => {
          if (
            rule.loader &&
            rule.loader.includes("babel-loader") &&
            rule.exclude
          ) {
            rule.exclude = Array.isArray(rule.exclude)
              ? [...rule.exclude, /mapbox-gl/]
              : [rule.exclude, /mapbox-gl/];
          }
        });
      }

      return config;
    },
  },
};
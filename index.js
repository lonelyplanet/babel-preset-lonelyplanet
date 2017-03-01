module.exports = {
  presets: [
    [
      require("babel-preset-env"), {
        "targets": {
          "browsers": ["last 2 versions", "safari >= 7"],
        },
      },
      require("babel-preset-react"),
    ],
  ],
  plugins: [
    require("babel-plugin-transform-flow-strip-types"),
    require("babel-plugin-transform-object-rest-spread"),
  ],
};

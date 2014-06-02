var jshintLoader = require("jshint-loader");
var jsxLoader = require("jsx-loader");

module.exports = function(input) {
  jshintLoader.call(
    this,
    jsxLoader.call(this, input)
  );
  return input;
}

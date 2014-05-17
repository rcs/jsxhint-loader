var jshintLoader = require("jshint-loader");
var jsxLoader = require("jsx-loader");
var loaderUtils = require("loader-utils");

var jsxTransform = require('react-tools').transform;

module.exports = function(input) {
  return jshintLoader.call(
    this,
    jsxLoader.call(this, transformedSource)
  );
}
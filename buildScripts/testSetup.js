// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before running tests
require("babel-register")();

// Disable webpack features that Mocha doesn't understand
require.extensions[".css"] = function () {};
"use strict";

var path = require("path"), fs = require("fs");

var requireAnywhere = function (dir) {
  var packageDir = findPackageDir(dir);
  return function (fileLocation) {
    return require(path.join(packageDir, fileLocation));
  };
};

var findPackageDir = function (dir) {
  var files = fs.readdirSync(dir);
  for (var i = 0, len = files.length; i < len; i++) {
    if (files[i] === "package.json" && fs.lstatSync(path.join(dir, files[i])).isFile()) {
      return dir;
    }
  }
  var nextPath = path.join(dir, "..");
  if (nextPath === dir) {
    throw new Error("Cannot find package.json");
  }
  return findPackageDir(nextPath)
};


//noinspection JSPrimitiveTypeWrapperUsage
module.exports = requireAnywhere;
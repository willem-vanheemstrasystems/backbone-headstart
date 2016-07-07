// See also https://github.com/requirejs/r.js/blob/master/build/example.build.js

({
  appDir: '../src',
  mainConfigFile: '../src/js/common.js',
  dir: '../dist',
  fileExclusionRegExp: /^\.|node_modules|Gruntfile|grunt-|libs|test|\.md|package.json/,
  modules: []
})
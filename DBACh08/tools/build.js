// See also https://github.com/requirejs/r.js/blob/master/build/example.build.js

({
  baseUrl: '../',
  dir: 'dist',
  out: 'dist/main.js',
  include: ['libs/require/almond', 'main'],
  wrap: true,
  paths: {
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    jquery: 'bower_components/jquery/jquery',
    text: 'libs/require/text'
  },
  keepBuildDir: true,
  shim: {
    'jquery': {
	  exports: '$'
	},
	'underscore': {
	  deps: ["jquery"],
	  exports: '_'
	},
	'backbone': {
	  deps: ["underscore", "jquery"],
	  exports: 'Backbone'
	}	  
  },
  optimize: 'uglify',
  optimizeCss: 'none'
})
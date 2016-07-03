/**
 * Gruntfile.js
 */
module.exports = function(grunt) {
	// Start the config's initialization function.
	grunt.initConfig({
		// Cache the settings in package.json file
		// That way those values can be referenced 
		// elsewhere in the Gruntfile.
		pkg: grunt.file.readJSON('package.json'),
		// Configure a task for concatenating 
		// the scripts in the app.
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/js/<%= pkg.name %>.js'
			},
			jquery: {
			    files: {
			      'dist/vendor/jquery/jquery.js': ['bower_components/jquery/dist/jquery.js']
			    }
			},			
			backbone: {
			    files: {
			      'dist/vendor/backbone/backbone.js': ['bower_components/backbone/backbone.js']
			    }
			},
			underscore: {
			    files: {
			      'dist/vendor/underscore/underscore.js': ['bower_components/underscore/underscore.js']
			    }
			}		
		},
		// Configure a task for minification.
		uglify: {
			options: {
				// The banner text is added 
				// to the top of the output.
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				// Minify all files produced in the concat task 
				// and safe them in the dist/js/ directory. 
				files: {
					'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		// Configure qunit
		qunit: {
			// Define the location of the test runner files
			files: ['test/**/*.html']
		},
		// Configure a task for linting,
		// which checks the syntax of the JavaScript 
		// for errors or poor formatting.
		jshint: {
			files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				// Options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		// Configure the watch plugin,
		// which runs tasks automatically whenever a file changes.
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint', 'qunit']
		},
		// Configure the bower install simple plugin
	    'bower-install-simple': {
	    	options: {
            	color: true
            	//directory: 'dist' THIS IS HANDLED IN concat
            },
	        'prod': {
	            options: {
	                production: true
	            }
	        },
	        'dev': {
	            options: {
	                production: false
	            }
	        }                	
	    },
		// Configure the process html plugin
	    processhtml: {
	        build: {
	            files: {
	                'dist/library.html' : ['src/library.html'],
	                'dist/libs/backbone.localStorage.js' : ['libs/backbone.localStorage.js'], // temp solution
	                'dist/libs/jquery-dateFormat.js' : ['libs/jquery-dateFormat.js'], // temp solution
	                'dist/libs/jquery-ui-1.11.4.custom/jquery-ui.js' : ['libs/jquery-ui-1.11.4.custom/jquery-ui.js'], // temp solution
	                'dist/js/app.js' : ['src/js/app.js'], // temp solution
	                'dist/js/views/book.js' : ['src/js/views/book.js'], // temp solution
	                'dist/js/views/library.js' : ['src/js/views/library.js'], // temp solution
	                'dist/js/models/book.js' : ['src/js/models/book.js'], // temp solution
	                'dist/js/collections/library.js' : ['src/js/collections/library.js'] // temp solution
	            }
	        }    	
	    }, 
	    // Configure the copy plugin
	    copy: {
	      options : {
	        processContentExclude: [
	    	   '**/*.{png,gif,jpg,ico,psd}'
	    	  ]
	      },
	      prod : {
            files : [
      	      {
	    	    expand : true,
	    	    cwd : 'src/img/',
	    	    src : [
	    	      '**',
	    	      '!junk/**'
	    	    ],
	    	    dest : 'dist/img/'
	    	  },
	    	  {
		    	expand : true,
		    	cwd : 'src/css/',
		    	src : [
		    	  '**'
		    	],
		    	dest : 'dist/css/'
		      }/*,
	    	  {
	    	    filter : 'isFile',
	    	    expand : true,
	    	    cwd : '.',
	    	    src : ['index.html'],
	            dest : '/dist/'
	    	  }*/
	        ]
	      }
	    }
	});
	// Load in the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-qunit');	
	grunt.loadNpmTasks('grunt-contrib-jshint');	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-install-simple');
	// See also https://gielberkers.com/process-html-grunt/
	grunt.loadNpmTasks('grunt-processhtml');
	// Setup the tasks to run,
	// most importantly the default task.
	// To run the process images task, run: grunt process-images
	grunt.registerTask('process-images', ['copy']);
	// To run the test task, run: grunt test
	grunt.registerTask('test', ['jshint', 'qunit']);
	// To run the bower task, run: grunt bower
	grunt.registerTask('bower', ['bower-install-simple', 'concat']);
	// To run the process html task, run : grunt process-html
	grunt.registerTask('process-html', ['processhtml', 'concat']);
	// To run the distribute task, run: grunt distribute
	grunt.registerTask('distribute', ['bower', 'process-images', 'process-html']);
	// To run the default task, run: grunt
	grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};
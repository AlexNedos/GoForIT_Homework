module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
	    dist: {
				options: {
					style: 'expanded'
				},
				files: {                           
					'styles/src/style.css': 'styles/src/style.scss'
				}
	    }
  	},

  	watch: {
    	sass: {
    		files: ['styles/src/style.scss'],
    		tasks: ['sass']
    	}
    },

    sprite:{
      all: {
        src: 'images/src/brands/*.png',
        dest: 'images/build/brandsSprite.png',
        destCss: 'styles/build/sprites.css'
      }
    },
    
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['js/src/libs/*.js', 'js/src/plugins/*.js', 'js/src/*.js'],
        dest: 'js/build/build.js'
      },
      css: {
        src: ['styles/src/*.css'],
        dest: 'styles/build/build.css'
      }
    },
    //minify js
    uglify: {
      dist: {
        src: ['js/build/build.js'],
        dest: 'js/build/build.js'
      }
    },
    //minify css
    cssmin: {
      dist: {
        src: 'styles/build/build.css',
        dest: 'styles/build/build.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
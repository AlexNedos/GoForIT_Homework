module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
	    dist: {
				options: {
					style: 'expanded'
				},
				files: {                           
					'src/styles/style.css': 'src/styles/style.scss' 
				}
	    }
  	},

  	watch: {
    	sass: {
			files: ['src/styles/style.scss'],
    		tasks: ['sass']
    	}
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
			src: ['src/js/libs/*.js', 'src/js/*.js'],
			dest: 'build/script.main.min.js'
      },
      css: {
			src: ['src/styles/*.css'],
			dest: 'build/stules.main.min.css'
      }
    },
    //minify js
    uglify: {
      dist: {
			src: ['build/script.main.min.js'],
			dest: 'build/script.main.min.js'
      }
    },
    //minify css
    cssmin: {
      dist: {
			src: 'build/stules.main.min.css',
			dest: 'build/stules.main.min.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
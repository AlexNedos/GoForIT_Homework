var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');

// Concat and minify (js, css)
gulp.task('minify', function(){
	gulp.src('./src/js/*.js')
		.pipe(concat('script.main.min.js'))
		.pipe(gulp.dest('./build'))
		.pipe(uglify())
		.pipe(gulp.dest('./build'));
	gulp.src('./src/styles/*.css')
		.pipe(concat('styles.main.min.css'))
		.pipe(csso())
		.pipe(gulp.dest('./build'))

});

// minify img
gulp.task('images', function() {
	gulp.src('./img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./img'))

});

gulp.task('default', function() {
	gulp.run('minify', 'images');
	
});
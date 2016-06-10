var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var svgSprite = require('gulp-svg-sprite');
var sass = require('gulp-sass');

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
	gulp.src('./img/**/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('./img'))

});


config = {
	shape: {
		dimension: {
			maxWidth: 70,
			maxHeight: 70
		},
		spacing: {
			padding: 0
		}
	},
	mode: {
		view: {
			bust: false
		},
	}
};
gulp.task('svgSprite', function() {
gulp.src('img/svg/*.svg')
	.pipe(svgSprite(config))
	.pipe(gulp.dest('img/'));
});

gulp.task('sass', function () {
	return gulp.src('src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/styles/'));
});


gulp.task('default', function() {
	gulp.run('minify', 'images', 'svgSprite', 'sass');
	
});
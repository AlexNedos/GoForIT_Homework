var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var svgSprite = require('gulp-svg-sprite');
var sass = require('gulp-sass');
var series = require('stream-series');

// Concat and minify (js)
gulp.task('conc-min-js', function(){
	return series(gulp.src('./src/js/jquery-1.12.3.min.js'),gulp.src('./src/js/jquery.jcarousel-min.js'),gulp.src('./src/js/isotope.pkgd.min.js'),gulp.src('./src/js/script.js'))
		.pipe(concat('script.main.min.js'))
		.pipe(gulp.dest('./build'))
		.pipe(uglify())
		.pipe(gulp.dest('./build'));
});
// Concat and minify (css)
gulp.task('conc-min-css', function(){
return series(gulp.src('./src/styles/reset.css'),gulp.src('./src/styles/style.css'),gulp.src('./src/styles/media.css'))
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
	return gulp.src('src/styles/scss/build/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/styles/'));
});


gulp.task('default', function() {
	gulp.run('conc-min-js', 'conc-min-css', 'images', 'svgSprite', 'sass');
	
});
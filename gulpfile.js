var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');

var gulp = require('gulp');  
var sass = require('gulp-sass');

var sassFiles = 'public/sass/**/*.scss';
var rscFolder = 'public/rsc/**/*.scss';
var cssDest = 'public/css/';

gulp.task('styles', function(){  
	gulp.src(sassFiles)
		.pipe(sass({
			style: 'compressed',
			lineNumbers: true,
			sourcemap: false,
		}).on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(minifycss())
		.pipe(gulp.dest(cssDest));
});

gulp.task('watch-styles', function() {
	gulp.watch([sassFiles, rscFolder], ['styles']);
});
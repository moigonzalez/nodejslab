var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');

var gulp = require('gulp');  
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var sassFiles = 'public/sass/**/*.scss';
var rscFolderCss = 'public/rsc/**/*.scss';
var cssDest = 'public/css/';

var jsFiles = 'public/js/**/*.js';
var rscFolderJs = 'public/rsc/**/*.js';
var jsDest = 'public/dist/';

var jsDependencies = ['/jquery/jquery.js',
						'/twig/twig.js',
						'/rsc/tether.min.js',
						'/rsc/bootstrap.min.js'];

gulp.task('scripts', function(){  
	gulp.src(jsFiles)
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});

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
	gulp.watch([sassFiles, rscFolderCss], ['styles']);
});

gulp.task('watch-scripts', function() {
	gulp.watch([jsFiles], ['scripts']);
});

gulp.task('watchers', ['watch-styles', 'watch-scripts']);
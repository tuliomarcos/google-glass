var gulp = require('gulp')
var concatenar = require('gulp-concat')
var minificar = require('gulp-uglify')

gulp.task('concat', function() {
	gulp.src(['../_css/*.*'])
		.pipe(concatenar('concat-css-geral.css'))
		.pipe(gulp.dest('../_build/'))
})

gulp.task('concat-js', function() {
	gulp.src('../_javascript/*.*')
		.pipe(concatenar('concat-js-geral.js'))
		.pipe(gulp.dest('../_build'))
})

gulp.task('minify', function() {
	gulp.src('_javascript/*.js')
		.pipe(minificar('funcoes.js'))
		.pipe(gulp.dest('../_build/'))
})



var sass = require('gulp-sass')

var scssFiles = '../_sass/styles.scss'
var cssDest = '../_css/'
var sassDevOptions = {
	outputStyle: 'expanded'
}

var sassProdOptions = {
	outputStyle: 'compressed'
}

gulp.task('sass', function() {
  	gulp.src(scssFiles)
    	.pipe(sass(sassDevOptions))
    	.pipe(gulp.dest(cssDest));
	gulp.watch(['../_sass/*.scss'], ['sass'])

});
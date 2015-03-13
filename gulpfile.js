var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function() {
  gulp.watch("public/scss/**/*.scss", ['sass']);  
});

gulp.task('sass', function () {
  return gulp.src('public/scss/app.scss')
    .pipe(sass({ 
      errLogToConsole: true,
      includePaths: ['./bower_components/foundation/scss']
    }))
    .pipe(gulp.dest('public/css/'))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css/'));
});

gulp.task('dev', function () {
  nodemon({ script: 'app.js', ext: 'html js jade scss', ignore: ['ignored.js'] })
      .on('change', ['sass'])
      .on('restart', function () {
        console.log('restarted!')
      })
})

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  
});

gulp.task('develop', function () {
  nodemon({ script: 'app.js', ext: 'html js jade', ignore: ['ignored.js'] })
      .on('change', [])
      .on('restart', function () {
        console.log('restarted!')
      })
})
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('styles', function() {
  return gulp.src([
    'css/**/*.scss'
  ])
  .pipe(sass({
    includePaths: [
      'bower_components/bootstrap-sass/assets/stylesheets'
    ]
  }))
  .pipe(concat('app.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist'));
});

gulp.task('templates', function() {
  return gulp.src('partials/**/*.html')
  .pipe(templateCache({ root: 'partials/', standalone: true }))
  .pipe(gulp.dest('tmp'));
});

gulp.task('scripts', ['templates'], function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/ng-file-upload/angular-file-upload.js',
    'js/**/*.js',
    'tmp/templates.js'
  ])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('build-scripts', ['scripts'], function(cb) {
  return gulp.src('tmp')
  .pipe(vinylPaths(del));
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.scss', ['styles']);
  gulp.watch('js/**/*.js', ['build-scripts']);
  gulp.watch('partials/**/*.html', ['build-scripts']);
})

gulp.task('default', ['styles', 'build-scripts']);

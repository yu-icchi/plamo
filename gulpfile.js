/**
 * @fileOverview Gulpfile
 * @author yu-ichiko@gmail.com
 */

var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

/**
 * Handlebars template build
 */
gulp.task('templates', function() {
  gulp.src('src/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'App.templates',
      noRedeclare: true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('public/js/'));
});

/**
 * Build task
 */
gulp.task('build', function() {

  var bundler = browserify({
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: ['./src/app.js']
  });

  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/js/'));
});

/**
 * Browser Sync task
 */
gulp.task('browserSync', function() {
  return browserSync({
    server: {
      baseDir: './public/'
    },
    port: 8080,
    files: [
      './js/**',
      './css/**',
      './img/**',
      './index.html'
    ]
  });
});

gulp.task('setWatch', function() {
  global.isWatching = true;
});

/**
 * Watch task
 */
gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['build']);
  gulp.watch('./src/**/*.hbs', ['build']);
});

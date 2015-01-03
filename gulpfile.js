/**
 * @fileOverview Gulpfile
 * @author yu-ichiko@gmail.com
 */

var domain = require('domain');
var d = domain.create();

var async = require('async');

var gulp = require('gulp');
var bower = require('gulp-bower');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');

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
    .pipe(source('application.js'))
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
      './public/js/**',
      './public/css/**',
      './public/img/**',
      './public/index.html'
    ]
  });
});

/**
 * Watch task
 */
gulp.task('watch', ['build', 'browserSync'], function() {
  d.run(function() {
    gulp.watch('./src/**/*', ['build']);
  });
  d.on('error', function(err) {
    console.error(err);
  });
});

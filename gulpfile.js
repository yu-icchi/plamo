/**
 * @fileOverview Gulpfile
 * @author yu-ichiko@gmail.com
 */

var domain = require('domain');

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
gulp.task('views', function() {
  gulp.src('src/views/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'views',
      noRedeclare: true,
      processName: function(filePath) {
        return declare.processNameByPath(filePath.replace('src/views/', ''));
      }
    }))
    .pipe(concat('views.js'))
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
gulp.task('watch', ['build', 'views', 'browserSync'], function() {
  gulp.watch('./src/**/*.js', ['build']);
  gulp.watch('./src/views/**/*.hbs', ['views']);
});

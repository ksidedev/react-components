// gulp/tasks/styles-libs.js

var config = require('../config'),
    concat = require('gulp-concat'),
    errors = require('../util/error-handler'),
    gulp   = require('gulp'),
    gulpif = require('gulp-if'),
    minify = require('gulp-minify-css'),
    pkg    = require('../../package'),
    rename = require('gulp-rename');


var scriptLibsTask = function(glob, dist, development) {

    var suffix = '.v' + pkg.version + '.min';

    return gulp.src([
            './lib/libs/css/bootstrap-v3.2.0.css',
            './lib/vendor/bootstrap-table/dist/bootstrap-table-adjusted.css',
            './lib/libs/css/animate.css'
        ])
        .on('error', errors)
        .pipe(concat('spark-libs.css'))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(gulpif(development, rename({ suffix: '.min'})))
        .pipe(gulpif(!development, rename({ suffix: suffix})))
        .pipe(gulp.dest(dist));

};

gulp.task('styles:libs', function() {

    var dist = config.paths.build + 'css';
    return scriptLibsTask('', dist, true);
});

gulp.task('styles:libs:dist', function() {

    var dist = config.paths.dist + 'www/css';
    return scriptLibsTask('', dist, false);
});

// gulp/tasks/styles.js

var autoprefixer = require('autoprefixer-core'),
    config       = require('../config'),
    gulp         = require('gulp'),
    gulpif       = require('gulp-if'),
    errors       = require('../util/error-handler'),
    postcss      = require('gulp-postcss'),
    pkg          = require('../../package'),
    rename       = require('gulp-rename'),
    sourcemaps   = require('gulp-sourcemaps'),
    sass         = require('gulp-sass');


var styleTask = function(src, dist, development) {

    var processors = [
        autoprefixer({browsers: 'last 2 versions, > 5%, ie 9'})
    ];

    var suffix = '.v' + pkg.version + '.min';

    gulp.src(src)
        .on('error', errors)
        .pipe(gulpif(development, sourcemaps.init()))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss(processors))
        .pipe(gulpif(development, sourcemaps.write('.')))
        .pipe(gulpif(!development, rename({ suffix: suffix})))
        .pipe(gulp.dest(dist));
};


gulp.task('styles', function () {

    var src  = config.globs.styles,
        dist = config.paths.build + 'css/';

    return styleTask(src, dist, true);
});

gulp.task('styles:dist', function () {

    var src  = config.globs.styles,
        dist = config.paths.dist + 'www/css/';

    return styleTask(src, dist, false);
});

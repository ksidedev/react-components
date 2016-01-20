// gulp/tasks/clean.js

var config = require('../config'),
    errors = require('../util/error-handler'),
    gulp   = require('gulp'),
    shell  = require('gulp-shell');


gulp.task('clean', function () {

    return gulp.src( [config.paths.build, config.paths.dist], { read: false } )
        .on('error', errors)
        .pipe(shell([
            'rm -rf ' + config.paths.build,
            'rm -rf ' + config.paths.dist
        ]));
});

gulp.task('clean:build', function () {

    return gulp.src( [config.paths.build], { read: false } )
        .on('error', errors)
        .pipe(shell([
            'rm -rf ' + config.paths.build
        ]));
});

gulp.task('clean:dist', function () {

    return gulp.src( [config.paths.dist], { read: false } )
        .on('error', errors)
        .pipe(shell([
            'rm -rf ' + config.paths.dist
        ]));
});

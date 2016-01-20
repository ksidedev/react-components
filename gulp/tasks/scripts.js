// gulp/tasks/scripts.js

var browserify  = require('browserify'),
    config      = require('../config'),
    concat      = require('gulp-concat'),
    errors      = require('../util/error-handler'),
    gulp        = require('gulp'),
    logger      = require('../util/bundle-logger'),
    minifyify   = require('minifyify'),
    pkg         = require('../../package'),
    streamify   = require('gulp-streamify'),
    vinylSource = require('vinyl-source-stream');


gulp.task('scripts:dist', function() {

    var suffix = '.v' + pkg.version + '.min';

    var bundleStream = browserify({
        entries:    [config.paths.src + 'js/spark-patches'],
        extensions: ['.js'],
        debug:      true,
    });

    bundleStream.plugin('minifyify', {
        output: config.paths.dist + 'js/spark-patches' + suffix + '.map.json',
        map:    'spark-patches' + suffix + '.map.json',
        uglify: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    });

    var bundle = function() {
        logger.start();

        return bundleStream
            .bundle()
            .on('error', errors)
            .pipe(vinylSource('spark-patches' + suffix + '.js'))
            .pipe(gulp.dest(config.paths.dist + 'www/js'))
            .on('update', bundle)
            .on('end', logger.end);
    };

    return bundle();
});

// gulp/tasks/scripts-libs.js

var config = require('../config'),
    concat = require('gulp-concat'),
    errors = require('../util/error-handler'),
    gulp   = require('gulp'),
    gulpif = require('gulp-if'),
    pkg    = require('../../package'),
    rename = require('gulp-rename');
    uglify = require('gulp-uglify');


var scriptLibsTask = function(glob, dist, development) {

    var suffix = '.v' + pkg.version + '.min';

    var uglifyOptions = {
        mangle: false,
        compress: {
            drop_console: true
        }
    };

    return gulp.src([
            './lib/vendor/jquery/dist/jquery.js',
            './lib/libs/js/modernizr.js',
            './lib/vendor/bootstrap/dist/js/bootstrap.js',
            './lib/libs/js/mobile.js',
            './lib/vendor/WOW/dist/wow.js',
            './lib/vendor/fastclick/lib/fastclick.js',
            './lib/vendor/bootstrap-tabcollapse/bootstrap-tabcollapse.js',
            './lib/vendor/slick.js/slick/slick.js',
            './lib/libs/js/carousel.js',
            './lib/libs/js/detect.js',
            './lib/libs/js/bootstrap-validator.js',
            './lib/libs/js/bootstrap-switch.js', // Depreciated
            './lib/vendor/bootstrap-table/dist/bootstrap-table.js',
            './lib/vendor/moment/moment.js',
            './lib/libs/js/bootstrap-datetimepicker.js',
            './lib/vendor/form.js', // Depreciated
            './lib/vendor/SVGInjector/dist/svg-injector.min.js',
            './lib/libs/js/svg-icons.js',
            './lib/libs/js/custom.js'
        ])
        .on('error', errors)
        .pipe(concat('spark-libs.js'))
        .pipe(uglify(uglifyOptions))
        .pipe(gulpif(development, rename({ suffix: '.min'})))
        .pipe(gulpif(!development, rename({ suffix: suffix})))
        .pipe(gulp.dest(dist));

};

gulp.task('scripts:libs', function() {

    var dist = config.paths.build + 'js';
    return scriptLibsTask('', dist, true);
});

gulp.task('scripts:libs:dist', function() {

    var dist = config.paths.dist + 'www/js';
    return scriptLibsTask('', dist, false);
});

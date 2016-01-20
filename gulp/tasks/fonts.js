// gulp/tasks/fonts.js

var config = require('../config'),
    gulp   = require('gulp'),
    errors = require('../util/error-handler');


var imageTask = function(glob, dist) {

    return gulp.src(glob)
        .on('error', errors)
        .pipe(gulp.dest(dist));
};

gulp.task('fonts', function() {

    var src  = config.globs.fonts,
        dist = config.paths.build + 'font';

    return imageTask(src, dist);
});

gulp.task('fonts:dist', function() {

    var src  = config.globs.fonts,
        dist = config.paths.dist + 'www/font';

    return imageTask(src, dist);
});

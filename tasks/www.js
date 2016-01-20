// gulp/tasks/www.js

var config = require('../config'),
    gulp   = require('gulp'),
    errors = require('../util/error-handler');


var wwwTask = function(glob, dist) {

    return gulp.src(glob)
        .on('error', errors)
        .pipe(gulp.dest(dist));
};

gulp.task('www:dist', function() {

    var src  = config.globs.www,
        dist = config.paths.dist + 'www';

    return wwwTask(src, dist);
});

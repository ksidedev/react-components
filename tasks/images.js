// gulp/tasks/images.js

var config = require('../config'),
    gulp   = require('gulp'),
    errors = require('../util/error-handler');


var imageTask = function(glob, dist) {

    return gulp.src(glob)
        .on('error', errors)
        .pipe(gulp.dest(dist));
};

gulp.task('images', function() {

    var src  = config.globs.images,
        // dist = config.paths.build + '/images'
        dist = config.paths.dist + 'www/images';

    return imageTask(src, dist);
});

gulp.task('images:dist', function() {

    var src  = config.globs.images,
        dist = config.paths.dist + 'www/images';

    return imageTask(src, dist);
});

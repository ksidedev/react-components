
var gulp       = require('gulp'),
    requireDir = require('require-dir')
    sequence   = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['build']);

gulp.task('build', function(done) {

    sequence(['clean:build'], [
        'images',
        'fonts',
        'styles',
        'styles:libs',
        'scripts:libs'
    ], done);
});

gulp.task('build:dist', function(done) {

    sequence(['clean:dist'], [
        'images',
        'styles:dist',
        'styles:libs:dist',
        'scripts:dist',
        'scripts:libs:dist',
        'www:dist'
    ], done);
});

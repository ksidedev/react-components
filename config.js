// gulp/config.js

module.exports = {
    paths: {
        build: './public/',
        dist:  './dist/',
        src:   './lib/'
    },
    globs: {
        fonts:   'lib/fonts/**/*',
        images:  'lib/img/**/*',
        scripts: 'lib/js/{spark-patches.js}',
        styles:  'lib/styles/{spark.scss,spark-sandbox.scss,pattern-lib.scss,spark-patches.scss,spark-internet.scss}',
        views:   'lib/views/**/*',
        www:     'lib/www/**/*'
    },
    url: {
        protocol: 'http',
        domain:   'localhost',
        port:     '8080',
    },
    env: {
        development: false
    }
};

/* IMPORT MODULES */
var gulp = require('gulp');
var sass = require('gulp-sass');


/* DECLARE VARS */
var PATHS = {
    styles: {
        src: 'src/sass/',
        dest: 'dist/css/',
    }
};


/* DECLARE TASKS */
/**
 * 'Default' Gulp task, executed when `gulp` is run from the
 * command line with *no* arguments.
 *
 * The following tasks are executed *before* the contents of
 * the `default` task.
 * - `sass`
 * - `watch`
 */
gulp.task( 'default', [ 'sass', 'watch' ], function() {
    console.log( 'INSIDE TASK: `default`' );
} );


/**
 * Task converts contents of `styles.scss` file (plus any
 * `*.scss` linked via `@import)` to vanilla CSS.
 * Resulting CSS file is saved to `dist/` directory
 */
gulp.task( 'sass', function() {
    console.log( 'INSIDE TASK: `sass`' );

    return gulp.src( PATHS.styles.src + 'styles.scss' )
        .pipe( sass(
            {
                outputStyle: 'expanded',
                includePaths: []
            }).on( 'error', sass.logError )
        )
        .pipe( gulp.dest( PATHS.styles.dest ) );
} );


/**
 * Task watches for changes to files in `src/` directory,
 * executes appropriate task.
 */
gulp.task( 'watch', function() {
    console.log( 'INSIDE TASK: `watch`' );

    gulp.watch( 'src/**/*.html', [ 'html' ] );
} );

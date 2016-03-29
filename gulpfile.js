
'strict'

var gulp = require('gulp');

gulp.task('default', ['assets', 'index'], function() {
    // task start.
});

gulp.task('assets', function() {
    gulp.src('node_modules/bootstrap/dist/css/*.min.css')
        .pipe(gulp.dest('dist/assets/css/'));

    gulp.src('node_modules/bootstrap/dist/js/*.min.js')
        .pipe(gulp.dest('dist/assets/js/'));

    gulp.src('node_modules/bootstrap/dist/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts/'));

    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/assets/js/'));

    gulp.src('node_modules/html5shiv/dist/*.min.js')
        .pipe(gulp.dest('dist/assets/js/'));

    gulp.src('node_modules/respond.js/dest/respond.min.js')
        .pipe(gulp.dest('dist/assets/js/'));

});

gulp.task('index', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('dist/'));
});

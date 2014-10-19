var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('default', function() {
    gulp.src('./views/**/*.styl')
        .pipe(stylus({use: [nib()]}))
        .pipe(gulp.dest('./public/css/'));
});

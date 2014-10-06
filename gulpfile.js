var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('default', function() {
    var YOUR_LOCALS = {};
    /*gulp.src('./pages/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty:true
        }))
        .pipe(gulp.dest('./dist/'));*/
    gulp.src('./pages/*.styl')
        .pipe(stylus({use: [nib()]}))
        .pipe(gulp.dest('./dist/css/'));
});

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', () => {
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.task('watch', () => {
  gulp.watch('css/styles.css', ['styles']);
});

//updated to ES6 functions 

const gulp = require("gulp");
// reguire - metoda Noda, pobiera paczki

const sass = require("gulp-sass");

gulp.task("sass", () => {
  // task - obowiązkowe; sas to nasza nazwa
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"));

  // zwroci to, co gulp pobierze z danego źródla;
});

gulp.task("watch", () => {
  // watch - metoda nasluchu, przekazujemy do niej jako pierwszy argument sciezke do obderwowanych plikow
  gulp.watch("app/scss/**/*scss", gulp.series("sass"));
});

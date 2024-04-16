const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("sass", function () {
  return gulp
    .src("./styles/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./styles/css/"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("./**/*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
  gulp.watch("./styles/scss/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.parallel("serve", "watch", "sass"));

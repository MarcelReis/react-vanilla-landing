var gulp = require("gulp");

function movePublicFolder() {
  return gulp.src("src/common/assets/**/**.*").pipe(gulp.dest("./dist/assets"));
}

function build() {
  return movePublicFolder();
}

export default build;

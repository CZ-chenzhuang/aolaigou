var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");

gulp.task("sass",function(){
	gulp.src("./src/sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'))
})

gulp.task('default',function(){
	gulp.watch(['./src/sass/*.scss'],['sass'])
})

var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	browserSync.init({
		notify: false,
			server: {
				baseDir: "app"
			}
	});
/* watch tasks for changes and browser refresh */
	watch('./app/**/*.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	})

});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});
	/*Task won't complete until dependency on scripts is done */
gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});
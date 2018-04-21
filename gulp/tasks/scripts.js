var gulp = require('gulp'),
webpack = require('webpack');

/*Task to run webpack and make sure it completes*/
gulp.task('scripts',function(callback){
	/*if statement to log if successful or not */
	webpack(require('../../webpack.config.js'), function(err, stats){
		if(err){
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});
let mix = require('laravel-mix');

mix.js('./src/js/app.js', './dist/js')
	.webpackConfig({
		devtool: 'source-map',
		watch: true,
		watchOptions: {
			aggregateTimeout: 600,
			poll: 2000,
			ignored: /node_modules/
		}
	})
	.sass('./src/sass/style.scss', './dist/css')
	.sourceMaps()
	.copy('./src/*.html', './dist')
	.copy('./src/fonts/*.*', './dist/fonts')
	.copy('./src/images/*.*', './dist/images')
    .browserSync({
		proxy: false,
        notify: true,
		watch: true,
        files: ['dist/*.*'],
		server: {
			baseDir: "./dist"
		}
    });


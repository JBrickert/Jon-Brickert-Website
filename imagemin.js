(async () => {
	const imagemin = (await import('imagemin')).default;
	const imageminJpegtran = (await import('imagemin-jpegtran')).default;
	const imageminPngquant = (await import('imagemin-pngquant')).default;

	await imagemin(['img/*.{jpg,png}'], {
		destination: 'dist/img',
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.6, 0.8],
			}),
		],
	});

	console.log('Images optimized');
})();

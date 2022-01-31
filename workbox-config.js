module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{vue,js,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
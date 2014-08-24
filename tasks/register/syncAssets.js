module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
    'jade:dev',
		'jst:dev',
		'stylus:dev',
		'sync:dev',
		'coffee:dev'
	]);
};

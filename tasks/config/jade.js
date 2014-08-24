/**
 * Precompiles Jade templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * (i.e. basically it takes Jade files and turns them into tiny little
 *  javascript functions that you pass data to and return HTML. This can
 *  speed up template rendering on the client, and reduce bandwidth usage.)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-jade
 *
 */

module.exports = function(grunt) {

  grunt.config.set('jade', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/templates/',
        src: ['**/*.jade'],
        dest: '.tmp/public/templates/',
        ext: '.html'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
};

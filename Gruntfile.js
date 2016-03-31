module.exports = function(grunt) {

  grunt.initConfig({
  karma: {
    unit: {
      configFile: 'karma.config.js',
      singleRun: true,
      logLevel: 'INFO'
    }
  },
  mochaTest: {
    test: {
      src: ['src/test/*.js']
    }
  }
  });

  grunt.registerTask('test', ['karma', 'mochaTest']);

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-mocha-test');
};
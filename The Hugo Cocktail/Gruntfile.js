module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      task: {
        src: ['main.less'],
        dest: 'dist/result.css'
      },
      options: {
        'paths': 'source',
        'rootpath': '',
        'compress': true,
        'cleancss': true,
        'ieCompat': true,
        'optimization': null,
        'strictImports': false,
        'strictMath': false,
        'strictUnits': false,
        'syncimport': false,
        'dumpLineNumbers': false,
        'relativeUrls': false,
        'customFunctions': null,
        'report': 'min',
        'sourceMap': false,
        'sourceMapFilename': '',
        'sourceMapURL': '',
        'sourceMapBasepath': '',
        'sourceMapRootpath': '',
        'outputSourceFiles': false,
        'modifyVars': null,
        'banner': ''
      }
    },
    
    watch: {
      files: ['**/*.less'],
      tasks: ['build']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['less']);
};
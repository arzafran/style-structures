module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      options: {
        paths: ["assets/css"],
        plugins: [
          new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
        ]
      },
      files: {
        "dist/result.css": "screen.less"
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
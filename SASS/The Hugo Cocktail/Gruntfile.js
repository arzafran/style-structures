module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['sass:dist']
      }
    },
    sass: {
      options: {
        sourceMap: false, // true if you need it
        outputStyle: 'compressed' // try expanded for debugging
      },
      dist: {
        files: {
          'dist/result.css': 'main.scss'
        }
      }
    }
  });
  grunt.registerTask('build', ['sass:dist']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
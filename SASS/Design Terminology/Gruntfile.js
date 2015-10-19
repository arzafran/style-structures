module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: false, // true if you need it
        outputStyle: 'compressed' // try expanded for debugging
      },
      dist: {
        files: {
          'dist/result.css': 'screen.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'dist/result.css':'dist/result.css'
        }
      }
    },
    watch: {
      sass: {
        files: ['**/*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('build', ['sass:dist', 'autoprefixer']);
};
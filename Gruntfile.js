module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/min.js': ['features/main.js', 'features/**/*.js']
        }
      }
    },
    wiredep: {
      task: {
        src: ['index.html']
      }
    },
    sass: {
      dist: {
        files: {
          'dist/min.css': ['styles/app.scss'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['uglify', 'wiredep', 'sass']);
};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'app/*.js'],
      options: {
        ignores: ["app/templates/compiled.js"]
      }
    },

    handlebars: {
      compile: {
      options: {
        namespace: "Hbs.Templates",
        processName: function(filePath) {
          var pathTokens = filePath.split("/");
          return pathTokens[pathTokens.length - 1];
        }
      },
      files: {
        "app/templates/compiled.js": ["app/templates/*.hbs"]
      }
    }
  }
});

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load the plugin that provides the "handlebars" task.
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

  // compile templates task
  grunt.registerTask('hbs', ['handlebars']);

};
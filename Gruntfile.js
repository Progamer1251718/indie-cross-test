'use strict';

module.exports=function(grunt){
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

        jshint:{
            options:{
              jshintrc: '.jshintrc',
              reporter: require('jshint-stylish')
            },
            all:{
              src:[
                'Gruntfile.js',
                'app/scripts/{,*/}*.js'
              ]
            }

          }
      });
      grunt.registerTask('build',['jshint']);
      grunt.registerTask('default',['build']);

};

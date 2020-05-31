module.exports = function(grunt){
    //config
    grunt.initConfig({

    });
    //load plugins
    //grunt.loadNpmTasks('');

    //register tasks
    grunt.registerTask('run', function(){
        console.log('I am running');
    });
    grunt.registerTask('sleep', function(){
        console.log('I am sleeping');
    });
};
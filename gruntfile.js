module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        cmq: {
            options: {
				log: false
            },
            your_target: {
				files: {
					'destination': ['source/*.css']
				}
            }
        }
    })

  grunt.loadNpmTasks('grunt-combine-media-queries');

};
module.exports = grunt => {
  grunt.initConfig({
    browserify: {
      client: {
        src: './index.js',
        dest: 'dist/glade.js',
        options: {
          sourceMap: true,
          transform: [['babelify', { presets: ['@babel/preset-env'] }]],
          browserifyOptions: { debug: true },
        },
      },
    },
    uglify: {
      build: {
        src: 'dist/glade.js',
        dest: 'dist/glade.js',
      },
    },
  })

  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('build', ['browserify', 'uglify'])
}

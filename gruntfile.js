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
  })

  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('build', ['browserify'])
}

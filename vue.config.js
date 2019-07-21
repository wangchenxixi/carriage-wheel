module.exports = {
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             vue: 'vue/dist/vue.esm.js'
    //         }
    //     }
    // }
    runtimeCompiler: true,

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}

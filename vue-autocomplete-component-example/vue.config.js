const path = require('path');
const { defineConfig } = require('@vue/cli-service')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/static/csv_processor/vue-ui/dist/', // Should be STATIC_URL + path/to/build
  outputDir: path.resolve(__dirname, '../csv_processor/csv_api/static/csv_api/vue-ui/dist/'), // Output to a directory in STATICFILES_DIRS
  filenameHashing: false, // Django will hash file names, not webpack
  runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  devServer: {
    devMiddleware: {
      writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
    }
  },
  configureWebpack: {
    plugins: [
      new VuetifyPlugin({autoImport: true, styles: true})
    ]
  }
})

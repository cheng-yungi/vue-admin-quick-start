// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://192.168.31.254:3333',
        ws: false,
        changeOrigin: true
      },
    }
  },
  outputDir: 'webapp',
}
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_TITLE)
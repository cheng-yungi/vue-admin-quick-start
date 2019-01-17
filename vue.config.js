// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://192.168.31.254:3333',
        ws: true,
        changeOrigin: true
      },
    }
  }
}
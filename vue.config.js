/*
 * @Description: 
 * @Author: Friends233
 */

module.exports = {
  publicPath: './', // 设置静态打包路径
  // devServer 选项单独配置
  devServer: {
    proxy: {
      '/api': {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
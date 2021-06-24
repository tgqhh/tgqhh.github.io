const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, 'src'),
        'style': path.resolve(__dirname, 'src/style')
      }
    }
  },
  //跨域
  // devServer: {
  //   proxy: {
  //     '任意名称': {
  //           target: '真实请求网址',
  //          changeOrigin: true, // 是否允许跨域
  //          secure: false,      // 关闭SSL证书验证https协议接口需要改成true 
  //           pathRewrite: {     // 重写路径请求
  //               '^/任意名称': '' //路径重写 
  //           }
  //       },
  //       // ....
  //   }
  // }
  devServer: {
    proxy: {
      '/api': {
            target: 'http://kg.zhaodashen.cn/',
           changeOrigin: true, // 是否允许跨域
           secure: false,      // 关闭SSL证书验证https协议接口需要改成true 
            pathRewrite: {     // 重写路径请求
                '^/api': '' //路径重写 
            }
        },
        // ....
    }
  }
};
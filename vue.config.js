module.exports = {
    devServer: {
        port: 8888,
        proxy: {
            '/api': {
              target: `http://106.53.251.59:3000`, // 这个链接是要代理到的api地址
              changeOrigin: true
            },
            '/admin': {
                target: `http://106.53.251.59:3000`,
                changeOrigin: true
              },
            '/public': {
                target: `http://106.53.251.59:3000`,
                changeOrigin: true
              },
        }
    },
    lintOnSave: false
}

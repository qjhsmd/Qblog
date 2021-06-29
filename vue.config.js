module.exports = {
    devServer: {
        port: 8888,
        proxy: {
            '/api': {
              target: `http://10.31.52.38:9999`, // 这个链接是要代理到的api地址
              changeOrigin: true
            },
        }
    },
    lintOnSave: false
}

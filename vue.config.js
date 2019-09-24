module.exports = {
  publicPath: "/zsg/",
  devServer: {
    disableHostCheck: true,
    port: 80,
    // proxy: {
    //   "/dzy": {
    //     target: "http://127.0.0.1:8080/",
    //     changeOrigin: true·
    //   }
    // }
    proxy: {
      "/dzy": {
        target: "/",
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 10240 }));
  }
};

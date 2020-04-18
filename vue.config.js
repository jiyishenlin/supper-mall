module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
  //publicPath: '/dist/'//部署到tomcat上需要，dist作为项目文件夹
}

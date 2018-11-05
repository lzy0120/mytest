const path = require('path')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']

let isProduction = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 根路径
  baseUrl: isProduction ? './' : '/',

  // 打包后的文件夹名
  outputDir: './dist',

  // 放置JS、CSS的文件夹名
  assetsDir: 'assets',

  devServer: {
    // 自动开启页面
    open: true,
    // api请求代理
    proxy: {
      '/api': {
        target: 'https://api.icolor.com.cn/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // 是否在保存的时候检查代码
  lintOnSave: undefined,

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('base', resolve('src/base'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('assets', resolve('src/assets'))
      .set('plugins', resolve('src/plugins'))
      .set('components', resolve('src/components'))
  },

  // 生产环境的开启Gzip
  configureWebpack: config => {
    Object.assign(config, {
      externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
        'vue-lazyload': 'VueLazyload',
        'fastclick': 'FastClick'
      }
    })
    // 生产环境开启Gzip
    // if (isProduction) {
    //   return {
    //     plugins: [new CompressionWebpackPlugin({
    //       asset: '[path].gz[query]',
    //       algorithm: 'gzip',
    //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //       threshold: 10240,
    //       minRatio: 0.8
    //     })]
    //   }
    // }
  },

  // 生产环境的source map是否开启
  productionSourceMap: false,

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    },
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/common/css/base/variable.styl'),
        path.resolve(__dirname, 'src/common/css/base/mixin.styl')
      ]
    }
  }
}

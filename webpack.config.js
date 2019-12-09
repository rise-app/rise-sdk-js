const path = require('path')
const nodeExternals = require('webpack-node-externals')
const mode = process.env.NODE_ENV
const dev = mode === 'development'
const webpackMode = mode === 'production' ? 'production' : 'development'

module.exports = {
  target: 'web', // <=== can be omitted as default is 'web'
  entry: [
    './test-browser/setup.js',
    './test-browser/run.js'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: './fixtures/bundle.js',
  },
  mode: webpackMode,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  // resolve: {
  //   alias: {
  //     'https://unpkg.com/chai@4.1.2/chai.js': 'chai/chai.js'
  //   }
  // },
  // module: {
  //   rules: [
  //     {
  //       // load chai.js like a normal <script> tag
  //       test: require.resolve('chai/chai.js'),
  //       use: 'script-loader'
  //     }
  //   ]
  // },
  devtool: dev && 'inline-source-map',
  externals: [nodeExternals()]
}

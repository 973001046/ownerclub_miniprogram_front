var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"https://xcxapi.chuanghehui.com"'
  // API_ROOT: '"https://xcxapidev.chuanghehui.com"'
})

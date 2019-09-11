import Fly from 'flyio/dist/npm/wx'

var fly = new Fly()
fly.config.baseURL = process.env.API_ROOT

fly.interceptors.response.use(
  (response) => {
    // wx.hideLoading()
    return response.data
  },
  (err) => {
    // wx.hideLoading()
    if (err.status === 0) {
      return '网络连接异常'
    } else if (err.status === 1) {
      return '网络连接超时'
    } else {
      if (err.response.data.message) {
        return err.response.data.message
      } else {
        wx.showLoading({
          title: '请求数据失败'
        })
        return '请求数据失败,请稍后再试'
      }
    }
  }
)

export default fly

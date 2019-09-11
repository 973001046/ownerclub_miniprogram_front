const getters = {
  windowHeight: state => {
    const res = wx.getSystemInfoSync()
    return res.windowHeight
  },
  isLiu: state => {
    const res = wx.getSystemInfoSync()
    return res.model.indexOf('iPhone X') >= 0 ? 1 : 0
  }
}
export default getters

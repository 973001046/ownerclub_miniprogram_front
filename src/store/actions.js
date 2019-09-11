import {AUTHOR} from '@/utils/api.config'
import fly from '@/utils/fly.config'

const actions = {
  userAuthor ({commit, state, dispatch}) {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success (res) {
          commit('GET_SCOPE_USERINFO', res.authSetting)
          console.log('res.authSetting')
          console.log(res.authSetting)
          resolve(res.authSetting['scope.userInfo'])
        }
      })
    })
  },
  loginCode () { // 授权返回 code
    return new Promise((resolve, reject) => {
      wx.login({
        success (res) {
          resolve(res.code)
        }
      })
    })
  },
  getUserInfo () { // 获取用户信息、加密
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success (res) {
          resolve(res)
        }
      })
    })
  },
  userLogin ({commit, state, dispatch}) {
    return new Promise((resolve, reject) => {
      // 授权
      dispatch('userAuthor').then(res => {
        if (res) {
          // 获取code
          dispatch('loginCode').then(code => {
            // 获取用户信息
            dispatch('getUserInfo').then(userInfoRes => {
              commit('GET_USERINFO', {
                userInfo: userInfoRes.userInfo,
                loginConfig: {
                  code: code,
                  iv: userInfoRes.iv,
                  encryptedData: userInfoRes.encryptedData,
                  nickname: userInfoRes.userInfo.nickName,
                  avatar: userInfoRes.userInfo.avatarUrl
                }
              })
              // 接口登陆
              dispatch('login').then(res => {
                resolve()
              }).catch(res => {
                reject(new Error('用户查询错误'))
              })
            })
          })
        } else {
          // wx.redirectTo({url: '/pages/login/main'})
          reject(new Error('未授权访问'))
        }
      })
    })
  },
  login ({commit, state, dispatch}) {
    return new Promise((resolve, reject) => {
      console.log(state.loginConfig)
      fly.post(AUTHOR, state.loginConfig).then((res) => {
        if (res.code !== 200) {
          reject(new Error('用户查询错误'))
          return false
        } else {
          // console.log('login')
          commit('GET_ACCOUNT_ID', res.data)
          if (res.data.isVerify) {
            console.log('res.data.isVerify:' + res.data.isVerify)
            wx.redirectTo({url: '/pages/index/main'})
          } else {
            wx.redirectTo({url: '/pages/register/main'})
          }
          resolve()
        }
      })
    })
  }
}

export default actions

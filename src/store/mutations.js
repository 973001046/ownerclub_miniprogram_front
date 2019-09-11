import * as types from './mutation-types'

const mutations = {
  [types.GET_SCOPE_USERINFO] (state, config) {
    state.authSetting_userinfo = config['scope.userInfo'] ? config['scope.userInfo'] : false
  },
  [types.GET_USERINFO] (state, config) {
    state.userInfo = config.userInfo
    state.loginConfig = config.loginConfig
  },
  [types.GET_ACCOUNT_ID] (state, data) {
    state.acountID = data.account_id
    state.department = data.department
    state.position = data.job
    state.name = data.nickname
  },
  [types.CHANGE_ACTIVE] (state, index) {
    state.tabBarList.map(item => {
      item.selected = false
    })
    state.tabBarList[index].selected = true
  },
  [types.SET_TYPE_LIST] (state, data) {
    state.typeList = data
  },
  [types.CHANGE_CREAT_FLAG] (state) {
    state.creat_flag = !state.creat_flag
  }
}

export default mutations

<script>
import { mapActions } from 'Vuex'

export default {
  methods: {
    ...mapActions(['userLogin'])
  },
  created () {
    console.log('created')
    this.userLogin()
      .then(res => {
        console.log('app login')
        wx.redirectTo({ url: '/pages/index/main' })
      })
      .catch((res, err) => {
        console.log(err)
        wx.redirectTo({ url: '/pages/login/main' })
      })
  }
}
</script>

<style>
page {
  background-color: #f4f6f9;
}
[v-cloak] {
  display: none;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>

<template>
  <div class="login">
    <div class="title">
      <img src="/static/images/logo.png" alt="">
      <h2>创富小助手</h2>
    </div>

    <div class="img">
      <img src="/static/images/da.png" alt="">
      <img src="/static/images/bitmap.png" alt="">
    </div>

    <button open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">绑定创合汇账号</button>

    <div class="tip">
      <h2>顾问的贴心管家小助手</h2>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'Vuex'
export default {
  data () {
    return {
      motto: 'Hello miniprograme'
    }
  },
  methods: {
    ...mapActions(['userLogin']),
    bindGetUserInfo (e) {
      this.userLogin()
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .tip {
    width: 210px;
    height: 1px;
    background-color: #D8D8D8;
    margin: 37px auto;
    font-size: 14px;
    color: #6F6F6F;
    position: relative;
    h2 {
      position: absolute;
      width: 160px;
      left: 25px;
      height: 22px;
      line-height: 22px;
      top: -10px; background-color: #fff;
      text-align: center;
    }
  }
  .img {
    text-align: center;
    img:first-child {
      width: 253px;
      height: 28px;
    }
    img:last-child {
      width: 339px;
      height: 331px;
    }
  }
  .title {
    width: 100px;
    margin: 30px auto;
    font-size: 20px;
    color: #000;
    padding-left: 35px;
    position: relative;
    img {
      width: 28px;
      height: 28px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
button {
  display: block;
  width: 300px;
  height: 50px;
  background-color: #113560;
  line-height: 50px;
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
}
</style>

<template>
  <div class="index align-center">
    <div class="bg">
      <img src="/static/imgs/bj.png" alt="">
    </div>
    <div class="content">
      <div class="img">
        <img src="/static/imgs/hour.png" alt="">
      </div>
      <h3>成就环保先锋</h3>
      <div class="txt">
        <p>没有人能原地不动就成功</p>
        <p>你的一小步，能让环境更“净”一步</p>
        <p>加入赛道，健康起跑</p>
      </div>
      <div class="imgs">
        <img @click="toList" src="/static/imgs/tan.png" alt="">
        <div></div>
        <img @click="toGame" src="/static/imgs/zhi.png" alt="">
      </div>

      <div class="btn">
        <img @click="toWin" src="/static/imgs/bang.png" alt="">
        <img @click="toRuler" src="/static/imgs/detail.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toList () {
      wx.navigateTo({
        url: '/pages/list/main'
      })
    },
    toGame () {
      wx.navigateTo({
        url: '/pages/game/main'
      })
    },
    toWin () {
      wx.navigateTo({
        url: '/pages/winner/main'
      })
    },
    toRuler () {
      wx.navigateTo({
        url: '/pages/ruler/main'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.align-center {
  display: flex;
  align-items: center;
}
.index {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    text-align: right;
    color: #fff;
    width: 100%;
    padding-right: 40px;
    .img {
      img {
        width: 182px;
        height: 120px;
      }
    }
  }
  h3 {
    font-size: 40px;
    font-weight: normal;
  }
  .txt {
    font-size: 14px;
    line-height: 2;
    margin: 10px 0;
  }
  .imgs {
    img {
      width: 182px;
      height: 45px;
      margin-top: 10px;
    }
  }
  .btn {
    img {
      width: 45px;
      height: 62px;
      margin-top: 10px;
      margin-left: 15px;
    }
  }
}
</style>

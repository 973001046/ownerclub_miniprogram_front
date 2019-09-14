<template>
  <div class="list">
    <div class="top">
      <div class="bg">
        <img src="/static/imgs/list.jpg" alt="">
      </div>
      <!-- S 弹幕 -->
      <div class="danmaku align-center">
        <div>
          <div class="item">
            <div>
              <img src="/static/imgs/icon.png" alt="">
              <p>下雨了</p>
            </div>

            <div>
              <img src="/static/imgs/icon.png" alt="">
              <p>下酸爽！！</p>
            </div>
          </div>

          <div class="item">
            <div>
              <img src="/static/imgs/icon.png" alt="">
              <p>下雨了，酸爽！！</p>
            </div>

            <div>
              <img src="/static/imgs/icon.png" alt="">
              <p>爽！！</p>
            </div>
          </div>

          <div class="item">
            <div>
              <img src="/static/imgs/icon.png" alt="">
              <p>下雨了，酸爽！！</p>
            </div>

            <div>
              <img src="/static/imgs/icon.png" alt="">
              <p>下雨了，酸爽！！</p>
            </div>
          </div>
        </div>
      </div>
      <!-- E 弹幕 -->
      <div class="hover">
        <div class="top-img">
          <div>
            <img src="/static/imgs/title.png" alt="" class="left">
            <img src="/static/imgs/woListTitle.png" alt="" class="right">
          </div>
        </div>
        <div class="pai">
          <h3>36</h3>
          <p>我的排名</p>
        </div>
        <div class="icon">
          <img src="/static/imgs/icon.png" alt="">
        </div>
        <div class="tips">
          <h3>Balabala</h3>
          <div class="nums clearfix">
            <div>总步数：<i>12,245</i></div>
            <div>总节碳量：<i>9.55</i><span>&nbsp;&nbsp;kg</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="user-lists">
      <div class="shu">
        <img src="/static/imgs/tip.png" alt="">
      </div>
      <ul>
        <li class="clearfix" v-for="i in 4" :key="i">
          <div class="index" v-if="i <= 2">
            <img v-if="i == 0" src="/static/imgs/gold.png" alt="">
            <img v-if="i == 1" src="/static/imgs/yin.png" alt="">
            <img v-if="i == 2" src="/static/imgs/tong.png" alt="">
          </div>
          <div class="index" v-else>{{i+1}}</div>

          <div class="img">
            <img src="/static/imgs/icon.png" alt="">
          </div>

          <div class="tips">
            <h3>Balabala</h3>
            <div class="nums clearfix">
              <div>总步数：<i>12,245</i></div>
              <div>总节碳量：<i>9.55</i><span>&nbsp;&nbsp;kg</span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="input">
      <input type="text" v-model="msg" placeholder="发射你的节碳宣言...">
      <div @click='addToList'>发射弹幕</div>
    </div>

    <div class="shadow align-center" v-if="flag">
      <div class="bg"></div>
      <div class="content">
        <div class="teps">
          <div :class="{current: current ==1}"></div>
          <div :class="{current: current ==2}"></div>
        </div>
        <div class="first" v-if="current ==1">
          <h3>12:00 准点开启</h3>
          <p>减少碳排放，第一步就开始！</p>
          <p>实时关注节碳步数排行榜，惊喜礼遇整点空降！</p>
          <img class="txtImg" src="/static/imgs/txtImg.png" alt="">
          <div class="btn" @click="current = 2">确定</div>
        </div>

        <div class="second" v-if="current ==2">
          <h3>简单开启“微信运动”</h3>
          <p>方法1：</p>
          <h4>进入微信设置-通用-辅助功能-开启“微信运动”</h4>
          <p>方法2：</p>
          <h4>微信搜索公众号：“微信运动”，直接启用该功能</h4>
          <div class="btn" @click="flag = false">确定</div>
        </div>
      </div>
    </div>

    <div class="shadow huan align-center" v-if="flagHua">
      <div class="bg"></div>
      <div class="content">
        <div class="close" @click="flagHua = !flagHua"><img src="/static/imgs/close.png" alt=""></div>
        <img class="xian" src="/static/imgs/xian.png" alt="">
        <div class="txt">
          <div class="gong">恭喜以下3位获得</div>
          <div class="gong">沃世界24小时“<strong>环保先锋</strong>”称号</div>
          <div class="people">
            <div>
              <img src="/static/imgs/icon.png" alt="">陈小跑~
            </div>

            <div>
              <img src="/static/imgs/icon.png" alt="">陈小跑~
            </div>

            <div>
              <img src="/static/imgs/icon.png" alt="">陈小跑~
            </div>
          </div>
          <div class="tips">
            <h4>感谢您在24小时内为节碳环保做出的贡献</h4>
            <p>3个工作日内客服将联系中奖用户领取精美礼品</p>
          </div>
        </div>
      </div>
    </div>

    <div class="shadow huan align-center" v-if="flagAdv">
      <div class="bg"></div>
      <div class="content">
        <div class="close" @click="flagAdv = !flagAdv"><img src="/static/imgs/close.png" alt=""></div>
        <div class="title">10点中奖公告</div>
        <div class="txt">
          <div class="gong">恭喜以下2位成为</div>
          <div class="gong">9:00-10:00时段沃世界“<strong>节碳先锋</strong>”称号</div>
          <div class="people">
            <div>
              <img src="/static/imgs/icon.png" alt="">陈小跑~
            </div>

            <div>
              <img src="/static/imgs/icon.png" alt="">陈小跑~
            </div>
          </div>

          <div class="gong" style="margin-top: 25px;">凭<strong>沃世界注册手机号</strong>至</div>
          <div class="gong">沃尔沃汽车品牌展示区领取精美礼品</div>
          <div class="tips" style="margin-top: 20px;">
            <p>我们将会在下个整点公布新一轮中奖名单，请实时关注</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      current: 1,
      msg: '',
      flag: false,
      flagHua: false,
      flagAdv: true,
      danmus: ['danmu1', 'danmu2', 'danmu3', 'danmu4', '...'],
      config: {
        channels: 5,
        loop: true,
        speed: 5,
        fontSize: 20
      }
    }
  },
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '数据加载中'
    })
    setTimeout(() => {
      wx.hideLoading()
      wx.stopPullDownRefresh()
    }, 2000)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.shu {
  text-align: center;
  img {
    width: 97px;
    height: 10px;
  }
}
.shadow {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .content {
    width: 300px;
    padding: 18px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    position: relative;
    z-index: 100;
    margin: 0 auto;
    .teps {
      position: absolute;
      right: 10px;
      top: 0;
      div {
        display: inline-block;
        background-color: #3a3a3a;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        margin-left: 5px;
      }
      .current {
        background-color: #20cab0;
      }
    }
    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    h4 {
      font-size: 12px;
    }
    .second {
      .btn {
        margin-top: 20px;
      }
      p {
        color: #e5e5e5;
        margin-top: 10px;
      }
    }
    p {
      font-size: 12px;
      color: #e5e5e5;
    }
    .txtImg {
      width: 214px;
      height: 33px;
      margin: 15px 0;
    }
    .btn {
      height: 45px;
      border: 1px solid #20cab0;
      color: #20cab0;
      line-height: 45px;
      text-align: center;
    }
  }
}
.huan {
  .close {
    position: absolute;
    bottom: -50px;
    width: 40px;
    height: 40px;
    left: 50%;
    margin-left: -20px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .content {
    background-color: #fff;
    position: relative;
    margin-top: -25px;
    .title {
      color: #1d3356;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      border-bottom: 1px solid #e8e8e8;
      line-height: 50px;
      margin-bottom: 20px;
    }
    .xian {
      width: 285px;
      height: 77px;
      display: block;
      margin: 0 auto;
      padding-bottom: 18px;
    }
    .gong {
      font-size: 15px;
      color: #1d3356;
      text-align: center;
      strong {
        display: inline;
        font-weight: bold;
      }
    }
    .tips {
      text-align: center;
      margin-top: 50px;
      h4 {
        font-size: 15px;
        color: #1d3356;
      }
      p {
        font-size: 11px;
        color: #1d3356;
      }
    }
    .people {
      display: flex;
      color: #020202;
      font-size: 15px;
      padding-top: 25px;
      div {
        flex: 1;
        text-align: center;
        img {
          display: block;
          width: 52px;
          height: 52px;
          margin: 0 auto 5px;
        }
      }
    }
  }
}
.align-center {
  display: flex;
  align-items: center;
  vertical-align: middle;
}
.input {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  padding: 10px 0;
  input {
    outline: none;
    width: 250px;
    height: 30px;
    display: block;
    background-color: #ececec;
    float: left;
    margin-left: 15px;
    border-radius: 4px;
    font-size: 11px;
    text-indent: 8px;
  }
  div {
    float: right;
    width: 75px;
    height: 30px;
    background-color: #6edece;
    font-size: 11px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    margin-right: 15px;
    border-radius: 4px;
  }
}
.user-lists {
  padding: 0 15px;
  background-color: #f6f6f6;
  ul {
    li {
      border-bottom: 1px solid #c2c2c2;
      display: flex;
      align-items: center;
      padding: 12px 0;
      .index {
        float: left;
        width: 45px;
        text-align: center;
        font-size: 25px;
        color: #121212;
        font-style: italic;
        margin-right: 5px;
        img {
          width: 21px;
          height: 30px;
          padding-top: 5px;
        }
      }
      .img {
        float: left;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #6edece;
        }
      }
      .tips {
        margin-left: 18px;
        h3 {
          font-weight: 500;
        }
        .nums {
          padding-top: 3px;
          color: #848484;
          div {
            float: left;
            font-size: 12px;
            margin-right: 20px;
            i {
              font-style: italic;
              font-size: 13px;
              font-weight: 500;
              color: #1e1e1e;
            }
            span {
              padding-left: 3px;
            }
            i,
            span {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
.clearfix:after {
  content: "";
  display: block;
  font-size: 0;
  height: 0;
  overflow: hidden;
  clear: both;
}
.top {
  height: 290px;
  width: 100%;
  position: relative;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .danmaku {
    position: absolute;
    left: 0;
    top: 0;
    width: 10000%;
    height: 150px;
    z-index: 99;
    .item {
      margin-top: 20px;
      display: block;
      div {
        position: relative;
        display: inline-block;
        height: 28px;
        line-height: 28px;
        background-color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        color: #242424;
        border-radius: 28px;
        padding-left: 32px;
        padding-right: 10px;
        margin-left: 50px;
        img {
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          height: 28px;
          width: 28px;
        }
      }
    }
  }
  .hover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 68px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    display: flex;
    align-items: center;
    .top-img {
      position: absolute;
      top: -50px;
      width: 100%;
      .left {
        width: 178px;
        height: 25px;
        margin-top: 12px;
        margin-left: 15px;
        float: left;
      }
      .right {
        width: 138px;
        height: 46px;
        float: right;
        margin-top: 3px;
        margin-right: 15px;
      }
    }
    .tips {
      margin-left: 18px;
      h3 {
        font-weight: 500;
      }
      .nums {
        padding-top: 3px;
        div {
          float: left;
          font-size: 12px;
          margin-right: 20px;
          i {
            font-style: italic;
            font-size: 13px;
            font-weight: 500;
          }
          span {
            padding-left: 3px;
          }
          i,
          span {
            display: inline-block;
          }
        }
      }
    }
    .pai {
      text-align: center;
      margin: 0 18px;
      h3 {
        font-size: 20px;
        font-style: italic;
      }
      p {
        font-size: 10px;
      }
    }
    .icon {
      height: 68px;
      img {
        margin-top: 14px;
        width: 40px;
        height: 40px;
      }
    }
  }
}
.list {
  padding-bottom: 55px;
}
</style>

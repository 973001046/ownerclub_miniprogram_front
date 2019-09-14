<template>
  <div class="list">
    <div class="top align-center">
      <img src="/static/imgs/ruler1.png" alt="">
      <div class="txt">
        <h2>活动时间</h2>
        <p>9月21日12:00-9月22日12:00</p>
      </div>
    </div>

    <div class="title clearfix">
      <div class="left" @click="current = 1">
        <span :class="{active: current == 1}">
          <img v-if="current == 1" src="/static/imgs/paiActive.png" alt="">
          <img v-else src="/static/imgs/pai.png" alt="">
          节碳步数排位赛
        </span>
      </div>
      <div class="right" @click="current = 2">
        <span :class="{active: current == 2}">
          <img v-if="current == 2" src="/static/imgs/wenActive.png" alt="">
          <img v-else src="/static/imgs/wen.png" alt="">
          环保知识趣竞答
        </span>
      </div>
    </div>
    <!-- S 内容 -->
    <div class="content">
      <div class="first" v-if="current == 1">
        <h3>1.活动规则：</h3>
        <p>活动期间将在每个整点抽取2名“节碳先锋”(总排行榜首位用户，及随机用户一名)赠送沃尔沃精美礼品。</p>
        <p>每位用户限1次中奖机会，如果已在前面时段获奖，后续奖品将按排行榜名次顺延至下一位发放。</p>
        <h3>2.奖品设置：</h3>
        <img class="pro" src="/static/imgs/pro.png" alt="">
        <h3>3.领奖规则</h3>
        <p>奖品领取于截止至<strong>9月22日13:00</strong>，中奖用户可凭沃世界注册手机号至品牌展示区领奖，逾期将视为放弃资格。</p>
        <h3>4.特别通知：</h3>
        <p>本活动已与微信步数实时同步，且从9月21日12点开始计算实时步数</p>
        <p>碳排放量计算标准：10000步约减少7.8公斤碳排放量。</p>
        <p class="line">-</p>
        <img class="bi" src="/static/imgs/bi.png" alt="">
        <p>为感谢大家为节碳环保做出的贡献，活动结束后将评选3位用户授予“沃世界24小时环保先锋”称号，并送出专属礼遇一份。</p>
        <div class="ruler">
          <h3>评选规则：</h3>
          <p>1.“节碳步数排位赛”24小时总步数第一名</p>
          <p>2.“环保知识趣竞答”答题用时最短</p>
          <p>3. 活动期间发送弹幕次数最多用户</p>
          <h3>奖品设置：</h3>
          <img class="jig" src="/static/imgs/jig.png" alt="">
        </div>
        <p>中奖名单将于9月25日12:00在本活动首页公布，届时客服会直接联系中奖用户领取礼品！</p>
        <p class="tip">*沃尔沃秉承公平公开公正原则，用户不得以作弊方式或任何不正当手段参与本次活动。一经发现，主办方有权取消作弊用户参赛机会。</p>
        <p>本活动最终解释权归沃尔沃汽车所有。</p>
      </div>

      <div class="first" v-if="current == 2">
        <h3>1.活动规则：</h3>
        <p>点击“环保知识趣竞答”参与互动，完成答题后，参与抽奖即有机会赢取沃尔沃精美礼品。</p>
        <p>每个手机号限参与抽奖1次。</p>
        <h3>2.奖品设置：</h3>
        <img class="jiang" src="/static/imgs/jiang.png" alt="">
        <h3>3.领奖规则</h3>
        <p>奖品领取于截止至<strong>9月22日13:00</strong>，中奖用户可凭沃世界注册手机号至品牌展示区领奖，逾期将视为放弃资格。</p>
        <p class="line">-</p>
        <img class="bi" src="/static/imgs/bi.png" alt="">
        <p>为感谢大家为节碳环保做出的贡献，活动结束后将评选3位用户授予“沃世界24小时环保先锋”称号，并送出专属礼遇一份。</p>
        <div class="ruler">
          <h3>评选规则：</h3>
          <p>1.“节碳步数排位赛”24小时总步数第一名</p>
          <p>2.“环保知识趣竞答”答题用时最短</p>
          <p>3. 活动期间发送弹幕次数最多用户</p>
          <h3>奖品设置：</h3>
          <img class="jig" src="/static/imgs/jig.png" alt="">
        </div>
        <p>中奖名单将于9月25日12:00在本活动首页公布，届时客服会直接联系中奖用户领取礼品！</p>
        <p class="tip">*沃尔沃秉承公平公开公正原则，用户不得以作弊方式或任何不正当手段参与本次活动。一经发现，主办方有权取消作弊用户参赛机会。</p>
        <p>本活动最终解释权归沃尔沃汽车所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 1
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 18px;
  color: #2e2d2d;
  font-size: 13px;
  line-height: 2;
  h3 {
    font-size: 15px;
    color: #2e2d2d;
    margin-top: 10px;
    font-weight: bold;
  }
  p {
    text-indent: 26px;
    margin-top: 5px;
    strong {
      display: inline;
      font-weight: bold;
    }
  }
  .pro {
    display: block;
    width: 303px;
    height: 104px;
    margin: 10px auto;
  }
  .jiang {
    width: 306px;
    display: block;
    height: 184px;
    margin: 10px auto;
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: #dcdcdc;
    overflow: hidden;
    margin-top: 30px;
  }
  .tip {
    font-size: 10px;
    color: #565656;
  }
  .bi {
    width: 208px;
    height: 57px;
    display: block;
    margin: 40px auto 20px;
  }
  .ruler {
    padding: 0 26px;
    p {
      text-indent: 0;
    }
  }
  .jig {
    width: 100%;
    height: 159px;
    display: block;
    margin: 0 auto;
  }
}
.align-center {
  display: flex;
  align-items: center;
  vertical-align: middle;
}
.title {
  width: 100%;
  display: flex;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  .left {
    img {
      width: 20px;
      height: 17px;
    }
  }
  .right {
    img {
      width: 19px;
      height: 14px;
    }
  }
  div {
    flex: 1;
    font-size: 16px;
    color: #828282;
    span {
      display: inline-block;
    }
    .active {
      border-bottom: 1px solid #1d3356;
      color: #1d3356;
    }
  }
}
.top {
  width: 100%;
  height: 195px;
  position: relative;
  color: #fff;
  text-align: center;
  .txt {
    width: 100%;
    font-size: 16px;
    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  img {
    display: block;
    position: absolute;
    width: 100%;
    height: 195px;
    z-index: -1;
  }
}
</style>

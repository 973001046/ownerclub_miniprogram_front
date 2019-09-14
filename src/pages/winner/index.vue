<template>
  <div class="list">
    <div class="step">
      <img src="/static/imgs/step.png" alt="">
    </div>

    <dl>
      <dt>
        <div>中奖时段</div>
        <div>总排行榜中奖用户</div>
        <div>随机抽奖用户</div>
      </dt>

      <dd class="align-center">
        <div class="time">
          <p>12:00-13:00</p>
          <img src="/static/imgs/rec.png" alt="">
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>
      </dd>

      <dd class="align-center">
        <div class="time">
          <p>12:00-13:00</p>
          <img src="/static/imgs/rec.png" alt="">
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>
      </dd>

      <dd class="align-center">
        <div class="time">
          <p>12:00-13:00</p>
          <img src="/static/imgs/rec.png" alt="">
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>
      </dd>

      <dd class="align-center">
        <div class="time">
          <p>12:00-13:00</p>
          <img src="/static/imgs/rec.png" alt="">
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>

        <div>
          <img class="icon" src="/static/imgs/icon.png" alt="">
          <p>陈小跑</p>
        </div>
      </dd>
    </dl>
  </div>
</template>

<style lang="less" scoped>
.align-center {
  display: flex;
  align-items: center;
  vertical-align: middle;
}
dl {
  dt {
    background-color: #f6f6f6;
    line-height: 45px;
    display: flex;
    div {
      flex: 1;
      font-size: 13px;
      text-align: center;
      color: #1f3654;
      font-weight: bold;
    }
  }
  dd {
    display: flex;
    background-color: #fff;
    font-size: 13px;
    color: #020202;
    padding: 10px 0;
    margin-bottom: 10px;
    div {
      flex: 1;
      text-align: center;
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #55dac6;
      }
    }
    .time {
      text-align: left;
      width: 100px;
      height: 32px;
      line-height: 32px;
      background-color: #232323;
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
      color: #fff;
      position: relative;
      p {
        position: relative;
        z-index: 2;
        text-indent: 28px;
      }
      img {
        position: absolute;
        height: 32px;
        top: 0;
        left: 0;
        width: 100px;
      }
    }
  }
}
.step {
  width: 100%;
  padding: 15px 0;
  height: 81px;
  margin: 0 auto;
  background-color: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-align: center;
  img {
    width: 307px;
    height: 81px;
  }
}
</style>

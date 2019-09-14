<template>
  <div class="index align-center">
    <div class="bg">
      <img src="/static/imgs/bj.png" alt="">
    </div>
    <div class="list">
      <swiper class="swiper" vertical='true'>
        <swiper-item>
          <div class="item align-center">
            <div class="center">
              <div class="title-img">
                <img src="/static/imgs/da.png" alt="">
              </div>
              <h3>1.如果小明想要开启低碳绿色生活，他可以？</h3>
              <div class="list-item">
                <div class="active">
                  <h4>A</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>

                <div>
                  <h4>B</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>

                <div>
                  <h4>C</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>
              </div>

              <div class="answer">回答正确</div>

              <div class="bottom">
                <img src="/static/imgs/up.png" alt="">
              </div>
            </div>
          </div>
        </swiper-item>

        <swiper-item>
          <div class="item align-center">
            <div class="center">
              <div class="title-img">
                <img src="/static/imgs/da.png" alt="">
              </div>
              <h3>1.如果小明想要开启低碳绿色生活，他可以？</h3>
              <div class="list-item">
                <div class="active">
                  <h4>A</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>

                <div>
                  <h4>B</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>

                <div>
                  <h4>C</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>
              </div>

              <div class="answer">回答正确</div>

              <div class="bottom">
                <img src="/static/imgs/up.png" alt="">
              </div>
            </div>
          </div>
        </swiper-item>

        <swiper-item>
          <div class="item align-center">
            <div class="center">
              <div class="title-img">
                <img src="/static/imgs/da.png" alt="">
              </div>
              <h3>1.如果小明想要开启低碳绿色生活，他可以？</h3>
              <div class="list-item">
                <div>
                  <h4>A</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>

                <div>
                  <h4>B</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>

                <div>
                  <h4>C</h4>
                  <p>用户外慢跑代替跑步机</p>
                </div>
              </div>

              <div class="answer">回答正确</div>

              <div class="start">开始抽奖</div>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<style lang="less" scoped>
.align-center {
  display: flex;
  align-items: center;
  vertical-align: middle;
}
.index {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
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
}
.list {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  .swiper {
    width: 100%;
    height: 100%;
    color: #fff;
  }
}
.item {
  width: 100%;
  height: 100%;
  .center {
    width: 100%;
  }
  .bottom {
    text-align: center;
    margin-top: 25px;
    img {
      width: 97px;
      height: 55px;
    }
  }
  .list-item {
    div {
      width: 285px;
      height: 43px;
      border: 1px solid #fff;
      border-radius: 43px;
      margin: 25px auto;
      position: relative;
      line-height: 43px;
      text-align: center;
      text-indent: 43px;
      font-size: 14px;
      &.active {
        border-color: #6adecc;
        h4 {
          border-color: #6adecc;
          color: #6adecc;
        }
      }
      h4 {
        position: absolute;
        width: 43px;
        height: 43px;
        border: 1px solid #fff;
        border-radius: 43px;
        left: -1px;
        top: -1px;
        text-indent: 0;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
  .answer {
    text-align: center;
    font-size: 13px;
  }
  .start {
    width: 180px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #6adecc;
    border-radius: 38px;
    text-align: center;
    font-weight: bold;
    margin: 30px auto;
    color: #6adecc;
  }
  h3 {
    font-size: 15px;
    padding: 35px 20px;
    text-align: center;
  }
  .title-img {
    width: 300px;
    height: 43px;
    margin: 0 auto;
    img {
      width: 300px;
      height: 43px;
    }
  }
}
</style>

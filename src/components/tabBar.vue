<template>
  <div class="tabBar" :class="{isLiu: isLiu}">
    <div
      class="item"
      v-for="(tab, index) in tabBarList"
      :key="index"
      :class="{active: tab.selected}"
      @click="changeTab(tab.selected, index)"
    >
      <img :src="tab.selected?tab.selectedIconPath:tab.iconPath" />
      <p>{{tab.text}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'Vuex'
export default {
  data () {
    return {
      name: 'tab'
    }
  },
  computed: {
    ...mapState(['tabBarList']),
    ...mapGetters(['isLiu'])
  },
  methods: {
    ...mapMutations(['CHANGE_ACTIVE']),
    changeTab (flag, index) {
      if (index === 1) {
        wx.setNavigationBarTitle({
          title: '收款记录'
        })
      } else if (index === 0) {
        wx.setNavigationBarTitle({
          title: '我的链接'
        })
      } else if (index === 2) {
        wx.setNavigationBarTitle({
          title: '固定支付'
        })
      } else if (index === 3) {
        wx.setNavigationBarTitle({
          title: '班级考勤'
        })
      }
      if (!flag) {
        this.CHANGE_ACTIVE(index)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tabBar {
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  // padding: 12px ;
  background-color: #fff;
  width: 100%;
  display: flex;
  box-shadow: 0 0 5px #ccc;
  &.isLiu {
    padding-bottom: 10px;
  }
  .item {
    padding: 12px 0;
    // background-color: #11519D;
    flex: 1;
    font-size: 10px;
    &.active {
      p {
        color: #11519d;
      }
    }
    p {
      margin-top: 2px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>

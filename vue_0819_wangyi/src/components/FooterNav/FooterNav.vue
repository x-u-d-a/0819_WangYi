<template>
  <div id="footerContent">
    <!-- 给每一项添加点击事件 目的是为了调转到指定的路由所以要把路径当参数传入 -->
    <div :class="{active:$route.path === '/firstPage'}" @click="goPath('/firstPage')" class="footerItem">
      <i class="iconfont icon-fangzi"></i>
      <span>首页</span>
    </div>
    <div :class="{active:$route.path === '/sort'}" @click="goPath('/sort')" class="footerItem">
      <i class="iconfont icon-guizi"></i>
      <span>分类</span>
    </div>
    <div :class="{active:$route.path === '/buy'}" @click="goPath('/buy')" class="footerItem">
      <i class="iconfont icon-zhaopian"></i>
      <span>值得买</span>
    </div>
    <div :class="{active:$route.path === '/shopCar'}" @click="goPath('/shopCar')" class="footerItem">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
    <div :class="{active:$route.path === '/personal'}" @click="goPath('/personal')" class="footerItem">
      <i class="iconfont icon-geren"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goPath(path){
      // 该方法实现跳转路由逻辑
      //$router是路由器对象,里面包含的是路由跳转的方法
      //$route是路由对象,里面包含当前路由下的所有信息(包括path params meta query)
      this.$router.push(path)  //写到这儿路由点击多次会出现报错信息

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl" 
  #footerContent
    top-border-1px(#d9d9d9)
    position fixed
    left 0
    bottom 0
    display flex
    width 100%
    box-sizing border-box
    background #fff
    .footerItem
      font-size 23px
      width 20%
      height 100px
      text-align center
      display flex
      flex-direction column
      &.active
        // 加&指向父级
        color red
      .iconfont
        font-size 35px
        line-height 60px
 
</style>

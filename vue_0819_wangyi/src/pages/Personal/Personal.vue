<template>
  <div id="personal-container">
    <!-- 头部区 -->
    <div class="personal-title">
      <div class="home"><i class="iconfont icon-fangzi"></i></div>
      <img src="../../common/images/logo.png" alt="">
      <div class="big"><i class="iconfont icon-icon-test"></i></div>
      <div class="car"><i class="iconfont icon-gouwuche"></i></div>
    </div>
    <!-- 图标区 -->
    <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    <!-- 两个按钮 -->
    <div class="two-button">
      <button class="phone"><i class="iconfont icon-ad79"></i> 手机号快捷登录</button>
      <button class="e-mail"><i class="iconfont icon-youjian"></i> 邮箱账号登录</button>
    </div>
    <!-- 底部图标按钮 -->
    <div class="personal-footer">
      <span class="icon iconfont icon-icon4">微信</span>
      <span class="iconfont">|</span>
      <span class="icon iconfont icon-QQ">QQ</span>
      <span class="iconfont">|</span>
      <span class="icon iconfont icon-icon">微博</span>
    </div>
  </div>
</template>

<script >
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #personal-container
    width 100%
    height 100%
    //头部区
    .personal-title
      position relative
      width 750px
      height 88px
      box-sizing border-box
      padding  0 30px
      display flex
      justify-content space-between
      border-bottom 1px #eee solid
      line-height 88px
      img   
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
        width 172px
        height 54px
      .home
        .icon-fangzi
          font-size 48px
          color #333
      .big
        margin-left 480px
        .icon-icon-test
          font-size 60px
          color #999
      .car
        .icon-gouwuche
          font-size 50px
          color #666
    //图标区
    img 
      width 268px
      height 90px
      margin 160px 0 232px 232px
    //两个按钮
    .two-button
      width 750px
      height 220px
      margin-bottom 408px
      box-sizing border-box

      padding 0 40px
      .phone
        width 670px
        height 94px
        border none 
        outline none 
        background #dd1a21
        margin-bottom 32px
        color #ffffff
        font-size 28px
      .e-mail
        width 670px
        height 94px
        border 1px  #dd1a21 solid
        outline none 
        background #ffffff
        margin-bottom 32px
        color #dd1a21
        font-size 28px
    //小图标区
    .personal-footer
      width 750px
      height 40px
      padding 0 90px
      box-sizing border-box
      .icon
        display inline-block
        width 182px
        height 100%
        text-align center
</style>

<template>
  <div id="shopcar-container">
      <!-- 购物车头部 -->
      <div class="shopcar-title">
        <h2>购物车</h2>
        <span>领劵</span>
      </div>
      <!--  购物车头部下-->
      <div class="shopcar-content">
         <!-- 一行字 -->
         <div class="line">
           <span>30天无忧退货</span>
           <span>48小时快速退款</span>
           <span>满88元免邮费</span>
         </div>
        <!-- 图标 -->
        <div class="icon"><i class="iconfont icon-gouwuche"></i></div>
        <!-- 又一行字 -->
        <span class="line2">去添加点什么吧</span>
        <!-- 按钮 -->
        <button>登录</button>
      </div>
  </div>
       
</template>

<script >
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #shopcar-container
    width 100%
    height 100%
    background #ffffff
    //购物车头部
    .shopcar-title
      width 750px
      height 88px
      box-sizing border-box
      padding 0 30px
      h2,span
        float left
        font-size 36px
        color #333
        text-align center
        line-height 88px
      span
        float right 
        color #dd1a21
        font-size 30px
        margin-right 20px

    //购物车头部下
    .shopcar-content
      width 750px
      height 1246px
      background #f4f4f4
      position relative
      .line
        width 750px
        height 70px
        box-sizing border-box
        padding 0 30px
        background #eee
        line-height 70px
        display flex
        span 
          flex auto
          text-align center
          font-size 24px
          color #666
      .icon
        width 248px
        height 248px
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
        .iconfont
          font-size 230px
          color #666
      .line2
        display block
        width 750px
        height 28px
        font-size 28px
        color #999
        text-align center
        line-height 28px
        margin-top 700px 
      button
        width 480px
        height 92px
        margin-top 50px
        margin-left 50%
        transform translateX(-50%) 
        outline none 
        background #dd1221
        border none
        font-size 30px
        color #ffffff


</style>

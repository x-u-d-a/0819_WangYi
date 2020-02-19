<template>
  <div id="firstPage">
    <!-- 首页头部 -->
      <div class="firstPage_header">
      <!-- logo -->
        <h1 class="firstPageLogo">
          <a href="https://m.you.163.com/"><img src="../../common/images/logo.png" alt=""></a>
        </h1>
        <form class="search_form" action="#">
          <input type="search" name="search" placeholder="搜索商品, 共21338款好物" class="firstPage_input iconfont">
        </form>
        <button class="firstPge-button">登录</button>
      </div>
    <!-- 首页导航 -->
      <div id="firstPage-NavOut">
        <div class="firstPage-Nav">
          <ul class="firstPage-list">
            <li class="firstPage-item"><a href="#">推荐</a></li>
            <li class="firstPage-item"><a href="#">居家生活</a></li>
            <li class="firstPage-item"><a href="#">服饰鞋包</a></li>
            <li class="firstPage-item"><a href="#">美食酒水</a></li>
            <li class="firstPage-item"><a href="#">个人清理</a></li>
            <li class="firstPage-item"><a href="#">母婴亲子</a></li>
            <li class="firstPage-item"><a href="#">运动旅行</a></li>
            <li class="firstPage-item"><a href="#">数码家电</a></li>
            <li class="firstPage-item"><a href="#">全球特色</a></li>
          </ul>
        </div>
        <div class="nav-icon">></div>
      </div>  
    <!-- 首页轮播 -->
     <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">1
          </div>
          <div class="swiper-slide">2
          </div>
          <div class="swiper-slide">3
          </div>
          <div class="swiper-slide">4
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <!-- 单行文字 -->
    <!-- 第一栏商品展示 -->
    <!-- 首页背景图及动态图片滚动显示 -->
    <!-- 商品列表 -->
    <!-- 新人专享礼 -->
    <!-- 类目热销榜 -->
    <!-- 限时购 -->
    <!-- 新品首发 -->
    <!-- 断货补单 -->
    <!-- 首页底部 -->

  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
    async mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 
  #firstPage
    // 头部样式
    .firstPage_header
      width 100%
      height 88px
      padding 16px 30px
      display flex
      box-sizing border-box
      .firstPageLogo
        width 138px
        height 40px
        margin-right 20px
        margin-top 10px
        img
          width 100%
          height 100%
      .firstPage_input
        width 442px
        height 56px
        font-size 28px
        margin-right 20px
        text-align center
        line-height 56px
        background #ededed
        border-radius 7px
      .firstPge-button
        width 74px
        height 40px
        font-size 23px
        padding 0
        background #fff
        border 1px #dd1a21 solid 
        color #dd1a21
        margin-top 10px

    //首页导航
    #firstPage-NavOut
      width 750px
      height 60px
      position fixed
      left 0
      top 88px
      div
        float left
      .firstPage-Nav
          width 650px
          height 60px
          font-size 28px
          background #eee  //写完删掉
          overflow hidden
          padding 0 30px
          box-sizing border-box
          margin 0
          .firstPage-list
            width 1280px
            height 100%
            .firstPage-item
              float left
              padding 0 16px
              a
                font-weight bold
                color #333
                font-size 27px
                line-height 60px
      .nav-icon
        width 100px
        height 60px
        background #ddd  //写完删掉
</style>

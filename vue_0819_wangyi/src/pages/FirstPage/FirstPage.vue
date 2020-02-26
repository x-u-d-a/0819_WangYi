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
        <button class="firstPge-button" @click="gotolink">登录</button>
      </div>
    <!-- 首页导航 -->
      <div id="firstPage-NavOut">
        <div class="navleft">
          <Navleft/>
        </div>
        <div class="navright">
          <router-view></router-view>
        </div>
      </div>  
    <!-- 首页轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../common/images/1.webp" alt=""></div>
        <div class="swiper-slide"><img src="../../common/images/2.webp" alt=""></div>
        <div class="swiper-slide"><img src="../../common/images/3.webp" alt=""></div>
        <div class="swiper-slide"><img src="../../common/images/4.webp" alt=""></div>
        <div class="swiper-slide"><img src="../../common/images/5.webp" alt=""></div>
        <div class="swiper-slide"><img src="../../common/images/6.webp" alt=""></div>
        <div class="swiper-slide"><img src="../../common/images/7.webp" alt=""></div>
        <div class="swiper-slide"><img src="../../common/images/8.webp" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 单行文字 -->
    <div class="firstPage-lineText">
      <div class="lineText-item"><i class="iconfont icon-wangyi"></i> <span>网易自营品牌</span></div>
      <div class="lineText-item"><i class="iconfont icon-dunpai"></i> <span >30天无忧退货</span></div>
      <div class="lineText-item"><i class="iconfont icon-caifu"></i> <span >48小时快速退款</span></div>
    </div>
    <!-- 第一栏商品展示 -->
    <div class="firstPage-goods">
      <ul class="firstPage-goodsList">
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
        <li class="goodsItem">
          <div class="goodsup"><img src="../../common/images/swiperDown.png" alt=""></div>
          <div class="goodsdown"><span>新品首发</span></div>
        </li>
      </ul>
    </div>
    <!-- 首页背景图及动态图片滚动显示 -->
    <div class="back-img">
        <div class="in-back">
          <img src="../../common/images/in-back.png" alt="">
          <span>$9.9</span>
        </div>
    </div>
    <!-- 商品列表 -->
    <div class="back-down">
      <div class="long-img"></div>
      <div class="img">
        <div class="img-item img-item1"></div>
        <div class="img-item img-item2"></div>
        <div class="img-item img-item3"></div>
        <div class="img-item img-item4"></div>
      </div>
    </div>
    <!-- 新人专享礼 -->
    <div class="newp">
      <h2 class="new-title">- 新人专享礼 -</h2>
      <div class="newp-main">
        <div class="main1 newp-left">
            <h3>新人专享礼包</h3>
            <img src="../../common/images/1.webp" alt="">
        </div>
        <div class="main1 newp-right">
            <div class="up">
              <h3>福利社</h3>
              <span>今日特价</span>
              <img src="../../common/images/in-back.png" alt="">
            </div>
            <div class="down">
              <h3>新人拼团</h3>
              <span>1元起包邮</span>
            </div>
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <h2 class="hot-title">类目热销榜</h2>
    <div class="hot-goods">
        <div class="hot hot-left">
            <h3>热销榜</h3>
            <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot hot-right">
            <h3>好评榜</h3>
            <img src="../../common/images/in-back.png" alt="">
        </div>
        <!-- 八个盒 -->
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="hot-itme">
          <h3>居家生活榜</h3>
          <img src="../../common/images/in-back.png" alt="">
        </div>
    </div>
    <!-- 限时购 -->
    <div class="buy-header">
      <h2 class="buy-h buy-title">限时购</h2>
          <!-- 倒计时 -->
      <div class="buy-h time-container">
        <div class="h">02</div>
        <div>:</div>
        <div class="m">28</div>
        <div>:</div>
        <div class="s">10</div>
      </div>
      <div class="many">更多 ></div>
    </div>
        <!-- 六个盒 -->
    <div class="buy-goods">
        <div class="buy-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>$28.2</h3>
        </div>
        <div class="buy-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>$28.2</h3>
        </div>
        <div class="buy-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>$28.2</h3>
        </div>
        <div class="buy-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>$28.2</h3>
        </div>
        <div class="buy-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>$28.2</h3>
        </div>
        <div class="buy-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>$28.2</h3>
        </div>
    </div>
    <!-- 新品首发 -->
    <div class="new-header">
      <h2 class="new-title">新品首发</h2>
      <div class="new-many">更多 ></div>
    </div>
    <div class="new-goods">
        <div class="new-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>富含免疫球蛋白，纯牛初乳粉 1克*30袋*2罐</h3>
          <div class="price"><span class="price">$298</span></div>
          <div class="price-down"><span>好货内部价</span></div>
        </div>
        <div class="new-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>富含免疫球蛋白，纯牛初乳粉 1克*30袋*2罐</h3>
          <div class="price"><span class="price">$298</span></div>
        </div>
        <div class="new-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>富含免疫球蛋白，纯牛初乳粉 1克*30袋*2罐</h3>
          <div class="price"><span class="price">$298</span></div>
        </div>
        <div class="new-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>富含免疫球蛋白，纯牛初乳粉 1克*30袋*2罐</h3>
          <div class="price"><span class="price">$298</span></div>
        </div>
        <div class="new-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>富含免疫球蛋白，纯牛初乳粉 1克*30袋*2罐</h3>
          <div class="price"><span class="price">$298</span></div>
        </div>
        <div class="new-itme">
          <img src="../../common/images/in-back.png" alt="">
          <h3>富含免疫球蛋白，纯牛初乳粉 1克*30袋*2罐</h3>
          <div class="price"><span>$298</span></div>
        </div>
    </div>
    <!-- 断货补单 -->
    <div class="king-container">
        <div class="king">
          <h3>断货补单王</h3>
          <div class="k"><span>紧急补仓疯抢中</span></div>
          <img src="../../common/images/in-back.png" alt="">
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="king">
          <h3>断货补单王</h3>
          <div class="k"><span>紧急补仓疯抢中</span></div>
          <img src="../../common/images/in-back.png" alt="">
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="king">
          <h3>断货补单王</h3>
          <div class="k"><span>紧急补仓疯抢中</span></div>
          <img src="../../common/images/in-back.png" alt="">
          <img src="../../common/images/in-back.png" alt="">
        </div>
        <div class="king">
          <h3>断货补单王</h3>
          <div class="k"><span>紧急补仓疯抢中</span></div>
          <img src="../../common/images/in-back.png" alt="">
          <img src="../../common/images/in-back.png" alt="">
        </div>
    </div>
    <!-- 首页底部 -->
    <div class="first-footer">
      <div class="footer-container">
        <span class="app">下载APP</span>
        <span class="com">电脑版</span>
      </div>
      <div class="text-container">
        <span class="text-up">网易公司版权所有 © 1997-2020</span><br>
        <span class="text-down">食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import  Navleft from '../../components/Navleft/Navleft'
  export default {
    async mounted(){
       new Swiper('.swiper-container', {
          autoplay: true,//可选选项，自动滑动
       pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 2
        },
         
    })

    new BScroll('.firstPage-Nav',{
      scrollX:true,
      click:true
    })
    },
     components:{
      Navleft,
    },
    methods:{
        gotolink(){
 
          //点击跳转至上次浏览页面
         // this.$router.go(-1)
 
          //指定跳转地址
          this.$router.replace('personal')
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 
  #firstPage
    background #eee
    // 头部样式
    .firstPage_header
      width 100%
      height 88px
      padding 16px 30px
      display flex
      box-sizing border-box
      position fixed
      left 0
      top 0
      z-index 99
      background #fff
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
        text-align left 
        line-height 56px
        background #ededed
        border-radius 7px
        outline none
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
      z-index 99
      background #fff
      display flex
      .navleft
        width 650px
        height 60px
        background #ffffff
      .navright
        width 650px
        height 60px
        background yellow
    //轮播图
    .swiper-container
      margin-top 148px
      width 100%
      height 370px
      img 
        width 100%
        height 100%

  //单行文字
    .firstPage-lineText
      width 750px
      height 72px
      background #fff
      line-height 72px
      display flex
      justify-content space-around
      .lineText-item
        span
          font-size 24px
        .iconfont
          color #dd1a21  
  //第一栏商品展示
    .firstPage-goods
      width 750px
      height 372px
      background #fff
      .goodsItem
        width 110px
        height 156px
        float left 
        background #fff
        margin 10px 20px 9px
        box-sizing border-box
        .goodsup
          width 100%
          height 110px
          img 
            width 100%
            height 100%
        .goodsdown
          width 100%
          height 36px
          text-align center 
          line-height 36px
          margin-top 10px

  //首页背景图及动态图片滚动显示
    .back-img
      position relative
      width 750px
      height 240px
      background-image url("https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0")         
      background-size 100%
      background-repeat no-repeat
      .in-back
        width 168px
        height 168px
        position absolute
        left 75px
        top 35px
        img 
          width 100%
          height 100%
        span 
          position absolute
          bottom 10px
          left 8px
          width 152px
          height 32px
          background #f48f18
          text-align center
          line-height 32px
          border-radius 20px
          color #fff
    //商品列表
    .back-down
      width 750px
      height 588px
      background #1674e3  
      .long-img
        width 710px
        height 160px
        background-image url("https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75")     
        background-size 100%
        background-repeat no-repeat
        margin 0 auto
      .img
        width 710px
        height 400px
        margin 5px auto 0
        .img-item
          width 351px
          height 186px
          background-image url("https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0")     
          background-size 100%
          background-repeat no-repeat
          float left 
          margin-top 10px
        .img-item2,.img-item4
          margin-left 7px
    //新人专享礼
    .newp
      width 750px
      height 558px
      background #fff
      margin 20px 0
      .new-title
        background #fff
        width 750px
        height 90px
        box-sizing border-box
        padding 0 30px
        text-align center
        line-height 90px
        font-size 32px
        color #333
      .newp-main
        width 691px
        height 434px
        margin 0 auto
        .main1
          float left
        .newp-left
          width 343px
          height 434px
          background #f9e9cf
          h3
            font-size 32px
            color #333
            padding 30px 0 0 30px
          img 
            width 258px
            height 257px
            display block
            margin 50px auto
        .newp-right
          width 343px
          height 434px
          margin-left 4px
          .up
            position relative
            width 323px
            height 215px
            padding 20px 0 0 30px
            box-sizing border-box
            margin-bottom 4px
            background #f9f3e4
            h3
              font-size 32px
              color #333
              line-height 50px
            span 
              font-size 24px
              color #7f7f7f
            img 
              position absolute
              right 0
              bottom 0
              width 200px
              height 200px
          .down
            width 343px
            height 215px
            background #f9e9cf
            padding 20px 0 0 30px
            box-sizing border-box
            h3
              font-size 32px
              color #333
              line-height 50px
            span 
              font-size 24px
              color #fff
              background #cbb693


  //类目热销榜
    .hot-title
      background #fff
      width 750px
      height 90px
      box-sizing border-box
      padding 0 30px
      line-height 90px
      font-size 32px
      color #333
    .hot-goods
      width 750px
      height 610px
      background #fff
      padding 0 20px 20px 30px
      box-sizing border-box
      margin-bottom 20px

      .hot-left
        background #f9f3e4
      .hot-right
        background #ebeff6
      .hot
        position relative
        float left
        width 340px
        height 200px
        margin 0 10px 10px 0
        h3
          line-height 150px
          margin-left 35px
          font-size 28px
          color #333
        img 
          position absolute
          right 0
          bottom 0
          width 200px
          height 200px
      .hot-itme
        width 165px
        height 180px
        background #f5f5f5
        float left 
        margin 0 10px 10px 0
        position relative
        h3
          text-align center
          margin-top 10px
        img 
          width 120px
          height 120px
          position absolute;
          top 50%;
          left 50%;
          transform translate(-50%, -50%)
          margin-top 15px
  //限时购
    .buy-header
      background #fff
      width 750px
      height 90px
      box-sizing border-box
      padding 0 30px
      font-size 32px
      color #333
      .buy-title
        line-height 90px
      .buy-h
        float left 
      .time-container
        width 181px
        height 90px
        background #fff
        margin-left 16px
        padding-top 30px
        box-sizing border-box
        .h
          width 36px
          height 36px
          background #333
          color #fff
          font-size 24px
          text-align center
          border-radius 5px
          margin-right 10px
          line-height 33px
        .m
          width 36px
          height 36px
          background #333
          color #fff
          font-size 24px
          text-align center
          border-radius 5px
          margin 0 10px
          line-height 33px
        .s
          width 36px
          height 36px
          background #333
          color #fff
          font-size 24px
          text-align center
          border-radius 5px
          margin-left  10px
          line-height 33px
        div
          float left
      .many
        float right 
        line-height 90px
    .buy-goods
      width 750px
      height 600px
      padding 0 30px
      box-sizing border-box
      background #fff
      margin-bottom 20px
      .buy-itme
        width 216px
        height 300px
        float left 
        margin 0 14px 0 0
        padding-bottom 30px
        box-sizing border-box
        h3
          text-align center
          color red
        img 
          width 216px
          height 216px

  //新品发布
    .new-header
      background #fff
      width 750px
      height 90px
      box-sizing border-box
      padding 0 30px
      font-size 32px
      color #333
      .new-title
        float left 
        line-height 90px
      .new-many
        float right  
        line-height 90px
    .new-goods
      width 750px
      height 796px
      padding 0 30px
      box-sizing border-box
      background #fff
      margin-bottom 20px
      .new-itme
        width 216px
        height 381px
        float left 
        margin 0 14px 0 0
        padding-bottom 30px
        box-sizing border-box
        h3
          width 210px
          height 72px
          text-align center
          font-size 24px
          color #333
          overflow hidden
          line-height 35px
          text-overflow ellipsis
        .price
          width 216px
          height 48px
          color red
          font-size 32px
        .price-down
          width 128px
          height 35px
          color red
          border 1px solid red
          line-height 35px
          text-align center
          // border-radius 5px   边框有问题
        img 
          width 216px
          height 216px
    //断货补单
       .king-container
          width 750px
          height 576px
          background #fff
          margin-bottom 20px
          padding 10px 30px 30px 26px 
          box-sizing border-box
          .king
            width 343px
            height 264px
            background #eee
            float left 
            margin 4px 0 0 4px
            padding 20px 0 0 20px
            box-sizing border-box
            h3
              width 323px
              height 48px
              font-size 32px
              color #333
            .k
              width 323px
              height 36px
              font-size 24px
              color #7f7f7f
            img
              width 150px
              height 150px
      //首页底部
      .first-footer
        width 750px
        height 244px
        background #333
        padding 54px 20px 28px
        box-sizing border-box
        margin-bottom 100px
        .footer-container
          width 710px
          height 62px
          margin 0 0 36px
          padding 0 155px 0 
          box-sizing border-box
          .app,.com
            width 172px
            height 62px
            color #fff
            float left
            text-align center
            line-height 62px
            border 0.5px #ccc solid
          .app
            margin-right 45px
        .text-container
          width 710px
          height 64px
          text-align center
          line-height 30px
          color #ccc    

</style>

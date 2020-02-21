<template>
  <div id="sort-container">
    <!-- 搜索框 -->
      <form class="sort_form" action="#">
        <input type="search" name="search" class="sort_input" placeholder="搜索商品, 共21338款好物" >
      </form>
    <!-- 左侧导航 -->
      <div class="sort-nav">
        <ul class="sort-list">
          <li class="item active"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
          <li class="item"><span>推荐专区</span></li>
        </ul>
      </div>
    <!-- 右侧显示内容 -->
    <div class="goods-container">
      <div class="container-in">
        <div class="img"><img src="../../common/images/short.webp" alt=""></div>
        <div class="img-down">
          <div class="goods-box">
            <img src="../../common/images/yuan.webp" alt="">
            <span>精选好物15元起</span>
          </div>
          <div class="goods-box">
            <img src="../../common/images/yuan.webp" alt="">
            <span>精选好物15元起</span>
          </div>
          <div class="goods-box">
            <img src="../../common/images/yuan.webp" alt="">
            <span>精选好物15元起</span>
          </div>
          <div class="goods-box">
            <img src="../../common/images/yuan.webp" alt="">
            <span>精选好物15元起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  //全局内容区
  #sort-container
    //顶部搜索框
    .sort_form
      position fixed
      top 0
      left 0
      width 750px
      height 88px
      box-sizing border-box
      padding 0 30px
      line-height 88px
      background #ffffff
      border-bottom 1px #eee solid
      .sort_input
        width 690px
        height 54px
        background #ededed
        color #666
        font-size 28px
        text-align center
        border-radius 10px
        outline none

  // 左侧导航栏
  .sort-nav
    position fixed
    top 88px
    left 0
    width 162px
    height 1148px
    background #ffffff
    border-right 2px #eee solid
    .sort-list
      width 162px
      box-sizing border-box
      padding 40px 0
      background #ffffff
      color #333
      .active
        color #ab2b2b
        border-left 6px #ab2b2b solid
      .item
        width 162px
        height 50px
        text-align center
        line-height 50px
        font-size 28px
        box-sizing border-box
        margin 15px 0 30px

  //商品区
  .goods-container
      position fixed
      right 0
      top 88px
      width 588px
      height 1148px
      background #ffffff
      overflow hidden
      .container-in
        width 100%
        height 100%
        background #fff
        padding 30px 30px 21px 30px
        box-sizing border-box
        .img
          width 528px
          height 192px
          img 
            width 100%
            height 100%
        .img-down
          width 528px
          height 648px
          box-sizing border-box
          padding-top 40px
          .goods-box
            width 144px
            height 218px
            text-align center
            margin 0 16px
            float left
            img 
              width 144px
              height 144px
              


</style>

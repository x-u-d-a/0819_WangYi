<template>
  <div id="sort-container">
    <!-- 搜索框 -->
      <form class="sort_form" action="#">
        <input type="search" name="search" class="sort_input" placeholder="搜索商品, 共21338款好物" >
      </form>
    <!-- 内容区 -->
      <div class="sort-content">
        <div class="left">
          <SortLeft/>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
  import SortLeft from '../../components/SortLeft/SortLeft'
  export default {
    components:{
      SortLeft,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  //全局内容区
  #sort-container
    width 100%
    height 100%
    background #ffffff
    //顶部搜索框
    .sort_form
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

    //内容区
    .sort-content
      display flex
      height calc(100vh - 185px)
      overflow hidden
      .left 
        width 162px  
        background #ffffff
        border-right 1px #eee solid
      .right
        width 588px
        background #ffffff
        padding 30px 30px 30px 21px
        box-sizing border-box

</style>

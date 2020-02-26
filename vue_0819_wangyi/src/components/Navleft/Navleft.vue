<template>
  <div class="navContainer">
      <div class="firstPage-Nav">
          <ul class="firstPage-list">
            <li class="firstPage-item">
              <!-- 这个单独加一个路由路径 -->
             <!-- <router-link :to=""> -->
                推荐
              <!-- </router-link> -->
             </li>
            <li class="firstPage-item" v-for="(item,index) in firstnavlist" :key="index">
              <!-- 明天设置路由路径 -->
              <router-link :to="`/sort/right/${item.id}`">
                {{item.name}}
              </router-link>
            </li>
            
          </ul>
        </div>
        <div class="nav-icon"><i class="iconfont icon-arrow-down"></i></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        firstnavlist:{}
      }
    },
   async mounted(){
      let firstnav = 
      await this.$API.getNavData()
      this.firstnavlist = firstnav
      // this.$router.push(`/sort/right/${this.navList[0].id}`);

      new BScroll('.navleft',{
        scrollY:true,
        click: true
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
      .firstPage-Nav
          width 100%
          height 100%
          font-size 28px
          overflow hidden
          padding 0 30px
          box-sizing border-box
          margin 0
          z-index 100
          .firstPage-list
            width 1240px
            height 100%
            white-space nowrap
            .firstPage-item
              float left
              padding 0 16px
              a
                font-weight bold
                color #333
                font-size 27px
                line-height 60px
      // .nav-icon
      //   text-align center
      //   line-height 60px
      //   .iconfont
      //     color #333
      //     font-weight bold  
 
</style>

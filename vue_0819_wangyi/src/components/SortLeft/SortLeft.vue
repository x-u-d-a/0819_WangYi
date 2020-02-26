<template>
  <div class="leftContainer">
      <ul class="content">
        <li class="active" v-for="(navItem,index) in navList" :key="index">
          <router-link :to="`/sort/right/${navItem.id}`">
            {{navItem.name}}
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        navList:[]
      }
    },
   async mounted(){
      let result = 
      await this.$API.getCateNavList()
      console.log(result);
      this.navList = result.categoryL1List
      this.$router.push(`/sort/right/${this.navList[0].id}`);

      new BScroll('.left',{
        scrollY:true,
        click: true
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.leftContainer
  .content
    li
      text-align center
      height 100px
      line-height 88px
      a
        position relative
        display block
        width 100%
        height 100%
        &.router-link-active
          color #ab2b2b
          &:before
            content :''
            width 6px
            height 50px
            background #ab2b2b
            position absolute
            left 0
            top 50%
            transform translateY(-50%)
</style>

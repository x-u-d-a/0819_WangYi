<template>
  <div>
     <ul class="rightList" v-if="cateObj.categoryList">
       
       <li v-for="(item,index) in cateObj.categoryList" :key="index">
         <!-- <img class="image1" :src="item.image" alt=""> -->
         <img class="image2" :src="item.wapBannerUrl" alt="">
         <span>{{item.name}}</span>
       </li>
     </ul>
     <ul class="rightList" v-if="cateObj.subCateList">
       <li v-for="(item,index) in cateObj.subCateList" :key="index">
         <!-- <img class="image1" :src="item.image" alt=""> -->
         <img class="image2" :src="item.wapBannerUrl" alt="">
         <span>{{item.name}}</span>
       </li>
     </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        cateObj:{},
        cateList:[]
      }
    },
    async mounted(){
      this.cateList = await this.$API.getCateList()
      console.log('333',this.$route.params)
      this.cateObj = this.cateList.find(item => item.id ===this.$route.params.id*1)
    },
    watch:{
      $route(){
      this.cateObj = this.cateList.find(item => item.id ===this.$route.params.id*1)

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .rightList
    display flex
    justify-content space-between
    flex-wrap wrap
    
    li
      width 144px
      height 216px
      // margin 0 auto
      .image2
        width 144px
        height 144px
      span 
        display block
        text-align center
</style>

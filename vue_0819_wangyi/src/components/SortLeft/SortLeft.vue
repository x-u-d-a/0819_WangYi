<template>
  <div>
      <ul class="navList">
        <li v-for="(navItem,index) in navList" :key="index">
          <router-link :to="`/sort/right/${navItem.id}`">
            {{navItem.name}}
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
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
      this.$router.push(`/sort/right/${this.navList[0].id}`)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .navList
    li
      text-align center
      height 88px
      line-height 88px
 
</style>

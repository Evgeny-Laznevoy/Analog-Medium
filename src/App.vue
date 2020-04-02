<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components:{
    Header
  },
  props: {
      post_data:{
        type: Object,
        default(){
          return {}
      }
    }
  },
  methods:{

  },
  computed:{

  },
  data(){
    return{
      posts:[],
      totalPosts: 0,
      perPage: 10,
      currentPage: 1
    }
  }
} 
</script>

<style>

</style>

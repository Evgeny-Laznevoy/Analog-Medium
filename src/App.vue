<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapActions } from 'vuex';

export default {
  components:{
    Header
  },
  created(){
      this.GET_POSTS_FROM_API();
      console.log('взяли данные из API');
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
    ...mapActions([
          'GET_POSTS_FROM_API'
        ]),
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

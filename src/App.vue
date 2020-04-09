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
  },
  props: {

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

    }
  }
} 
</script>

<style>

</style>

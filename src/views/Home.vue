<template>
    <section>
        <div class="is-vertical-center">
            <div class="page" v-for="page in pages" :key="page" 
                @click="pageClick(page)" 
                :class="{page_selected:page === pageNamber}"
            >
                {{page}}
            </div>
        </div>
        <div class="card" v-for="post in paginatedPages" 
                          :key="post.id" 
                          v-bind:post_data="post">
          <div class="card-content">
            <div class="content">
              <p class="title is-5">{{post.title}}</p>
              {{post.description}}
              <br>
            </div>
            <time datetime="2016-1-1">{{myDate(Math.ceil(Math.abs((new Date(post.createdAt)).getTime() - (new Date()).getTime()) / (1000 * 3600 * 24)))}}</time>
            <div class="buttons is-right" v-if="isUserAuthenticated">
                <b-button tag="router-link" :to="{ path: '/editPost' }" @click="editPost">Изменить</b-button>
                <b-button>Удалить</b-button> 
                <b-button><i class="material-icons">thumb_up</i></b-button>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
  export default {
    name: 'Home',
    components: {

    },
    props: {
        
    },
    computed:{
      ...mapGetters([
        'POSTS',
        'isUserAuthenticated'
      ]),
      pages(){
          return Math.ceil(this.$store.getters.lastPostId / 10);
      },
      paginatedPages(){
          let from = (this.pageNamber - 1) * this.perPage;
          let to = from + this.perPage;
          return this.POSTS.slice(from, to)
      }
    },
    methods:{
      editPost(){
          // console.log(post);   
      },
      myDate(newDate){
          let number = newDate;
          let lastNumber = number.toString().slice(-1);

          switch (lastNumber) {
            case "1":
                return `${number} день назад`; 
            case "2":
            case "3":
            case "4":
                return `${number} дня назад`; 
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":  
                return `${number} дней назад`;     
            default:
                return "text"
          }
      },
    pageClick(page){
        this.pageNamber = page;
    }, 
    ...mapActions([
          'GET_POSTS_FROM_API'
        ]),
    },
    data(){
      return {
               perPage: 10,
               pageNamber: 1,
               isElVisible: false
            }
    },
    mounted() {
        this.GET_POSTS_FROM_API();
    }
  }
</script>

<style>
    .card{
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 500px;
    }

.is-vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.page{
  padding: 4px 8px;
  border: solid 1px #e7e7e7;
  margin-top: 10px;
  margin-right: 5px;
}

.page:hover{
  background: #167df0;
  cursor: pointer;
  color: #ffffff;
}

.page_selected{
  background: #167df0;
  cursor: pointer;
  color: #ffffff;
}
</style>

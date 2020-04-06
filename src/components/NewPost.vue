<template>
    <div class="box">
        <div class="control">
            <div class="field">
                <label class="label">Наименование карточки</label>
                <input class="input" type="text" v-model="labelPost" required>
            </div>
            <div class="field">
                <label class="label">Текст</label>
                <textarea v-model="textPost" class="textarea" required></textarea>
            </div>
            <div class="buttons is-right">
                <button class="button is-link" @click.prevent="addPost" :disabled="getProcessing">Добавить</button>
                <router-link to="/" class="button">Отмена</router-link>
            </div> 
        </div>   
    </div>    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'NewPost',
        components:{
            
        },
        computed:{
            ...mapGetters([
                'getProcessing',
                'POSTS'
            ]),
            getNewDate: function(){
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                return new Date(y,m,d)
            }
        },
        data(){
            return{
                labelPost: "",
                textPost: ""
            }
        },
        props:{},
        methods:{
            addPost(){
             let post = this.$store.getters.lastPostId;  
             const lastId = ++post;
            
            // let localTime = new Date() .format('YYYY-MM-DD'); // store localTime 
            // let proposedDate = localTime + "T00:00:00.000Z";
            let newDate = this.getNewDate;

                let newPost = {
                    id: lastId,
                    title: this.labelPost,
                    description: this.textPost,
                    claps: 0,
                    createdAt: newDate,
                    updateAt: "2019-09-29T00:00:00.000Z",
                    userId: 1
                }
                // let user = this.$store.getters.getUserRole;  
                    this.ADD_TO_POST(newPost)
                    // this.GET_POSTS_FROM_API();
                    this.$router.push("/")       
            },
            ...mapActions([
                'ADD_TO_POST',
                'GET_POSTS_FROM_API'
            ])
        }   
    }
</script>

<style scoped>

    .box{
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        top: 50px;
    }

</style>
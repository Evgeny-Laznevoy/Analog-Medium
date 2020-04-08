<template>
    <div class="box" >
        <div class="control">
            <div class="field">
                <label class="label">Наименование карточки</label>
                <b-input v-model="labelPost" required></b-input>
            </div>
            <div class="field">
                <label class="label">Текст</label>
                <textarea v-model="textPost" class="textarea" required></textarea>
            </div>
            <div class="buttons is-right">
                <button class="button is-link" @click.prevent="changePost()" :disabled="getProcessing">Изменить</button>
                <router-link to="/" class="button">Отмена</router-link>
            </div> 
        </div>   
    </div>   
</template>

<script>
import { mapGetters } from 'vuex'
import { bus }  from '../bus'

    export default {
        name: 'EditPost',
        data(){
            return {
                labelPost: "",
                textPost: "",
                idPost: 0,
                title: ""
            }
        },
        props: {

        },
        updated(){
            //  bus.$emit('editPost', this.idPost);
            //     //    this.idPost = data;
            //     //    this.editIndex(data);
            //     console.log(this.idPost);
                //    console.log(this.idPost);
                //    console.log('lissen');    
                //    let mypost = this.$store.getters.POSTS[this.idPost]; 
                //    this.labelPost = mypost.title;
                //    console.log(this.labelPost); 
                   
                //    return this.id = this.id
                // console.log("я тута" `${{index}}`);
                // console.log(this.index);
                // }); 



                // bus.$off('editPost');
        },
        beforeDestroy(){
            this.bus.$off('editPost');
        },
            // bus.$on('editPost', ()=> {
            //     console.log('я тутf');
            // });    
            // console.log(this.i);
        methods:{
            changePost(){
                bus.$emit('editPost', this.idPost);
                console.log('изменяем пост');
                    console.log(this.idPost);
                    // bus.$on('editPost', post=> {
                    let modifiedPost = {
                        title: this.labelPost,
                        description: this.textPost,
                        createdAt: this.getNewDate,
                        index: this.idPost,
                        }
                    console.log(modifiedPost);   
                    this.$store.dispatch('EDIT_POST', modifiedPost);
                    this.$router.push("/")
            },
            editIndex(index){
                console.log('куку');
                console.log(index);
                this.idPost = index;
            }
            // getEditPost(){
            //     // console.log(index); 
            //     // console.log('lissen');
            // //    bus.$on('editPost', data=> {
            // //        this.index = data.id
            // //     console.log("я тута" `${{index}}`);
            // //     console.log(this.index);
            // //     }); 
            // }
        },
        computed:{
            ...mapGetters([
                'getProcessing'
            ]),
            getNewDate: function(){
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                return new Date(y,m,d)
            }
        }   
    }    
</script>

<style >

</style>
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
                <button class="button is-link" @click.prevent="changePost" :disabled="getProcessing">Изменить</button>
                <router-link to="/" class="button">Отмена</router-link>
            </div> 
        </div>   
    </div>   
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'

      var vm = new Vue ({
          data:{
              index: 0
          }
        })

    export default {
        name: 'EditPost',
        data(){
            return {
                labelPost: "",
                textPost: "",
                idPost: 0,
                title: "",
            }
        },
        props: {

        },
        created(){
            this.$bus.$on('editPost', index => {
                Vue.set(vm, 'index', index);
            })
        },
        methods:{
            changePost(){
                    var modifiedPost = {
                        title: this.labelPost,
                        description: this.textPost,
                        createdAt: this.getNewDate,
                        index: vm.index,
                        }
                    // console.log(modifiedPost);   
                    this.$store.dispatch('EDIT_POST', modifiedPost);
                    this.$router.push("/")       
            }
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
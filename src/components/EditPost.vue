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
                <button class="button is-link" @click="editPost" :disabled="getProcessing">Изменить</button>
                <router-link to="/" class="button">Отмена</router-link>
            </div> 
        </div>   
    </div>   
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'EditPost',
        data(){
            return{
                labelPost: "",
                textPost: "",
                post: {}
            }
        }, 
        methods:{
            editPost(){
                
            }
        },
        computed:{
            ...mapGetters([
                'getProcessing'
            ])
        }   
    }    
</script>

<style >

</style>
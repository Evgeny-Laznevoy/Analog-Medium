<template>
    <b-navbar type="is-info" v-show="unElVisible()"> 
        <template slot="start">
             <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Medium
             </b-navbar-item>
        </template>     

         <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <!-- <b-button v-for="(item,i) in menuItems" flat :key="`menuItems${i}`" tag="router-link" :to="{ path: item.route }" >
                        {{item.title}}
                    </b-button>  -->
                    <b-button tag="router-link" :to="{ path: '/newpost' }" v-show="newPostVisible">Новый пост</b-button>
                    <b-button tag="router-link" :to="{ path: '/signin' }" v-show="elVisible">Войти</b-button>
                    <b-button @click.prevent ="signout" :disabled="getProcessing" v-show="exitVisible">Выйти</b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    methods: {
            signout(){
                this.$store.dispatch('SIGNOUT')
            },
            unElVisible(){
                if (this.getUserRole.isAuthenticated === true && this.getUserRole.role === "writer") {
                    this.elVisible = false
                    this.newPostVisible = true
                    this.exitVisible = true
                    return this.logoVisible = true
                } else if (this.getUserRole.isAuthenticated === true && this.getUserRole.role === "reader"){
                    this.elVisible = false
                    this.exitVisible = true
                    this.newPostVisible = false
                    return this.logoVisible = true
                } else {
                    this.elVisible = true
                    this.newPostVisible = false
                    this.exitVisible = false
                    return this.logoVisible = true
                }
            }
        },
      components: {
            
        },
        data() {
            return {
                elVisible: false,
                newPostVisible: false,
                exitVisible: true,
                logoVisible: true 
            }
        },
        watch:{
            isUserAuthenticated(val){
                if (val === false) {  
                    this.$router.push("/signin")
                }
            }
        },
        computed:{
            ...mapGetters([
                'getProcessing',
                'isUserAuthenticated',
                'getUserRole'
            ]),
            menuItems(){
                return[
                    {
                        title:'Новый пост',
                        route: '/newpost',
                    },
                    {
                        title:'Войти',
                        route: '/signin',
                    }
                ]
            }
        },
    }
</script>
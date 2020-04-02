<template>
    <div>
        <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                v-model="email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                v-model="password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-primary" @click.prevent ="signin" :disabled="getProcessing">Login</button>   
                        <router-link to="/" class="button">Отмена</router-link>
                    </footer>
                </div>
            </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        name: 'Signin',
        data(){
            return{
                email: "",
                password: ""
            }
        },
        methods:{
            signin(){
                this.$store.dispatch('SIGNIN', {email:this.email, password:this.password})
            }
        },
        computed:{
            ...mapGetters([
                'getProcessing',
                'isUserAuthenticated'
            ])
        },
        watch:{
            isUserAuthenticated(value){ 
                if (value === true) {
                    this.$router.push("/")
                }
            }
        }
    }
</script>

<style>

</style>
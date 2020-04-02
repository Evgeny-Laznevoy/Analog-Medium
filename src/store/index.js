import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts:[],
    post:{},
    user:{
      isAuthenticated: false,
      id: null,
      role: ""
    },
    processing: false
  },
  mutations: {
    SET_POSTS_TO_STATE: (state, posts) => {
        state.posts = posts; 
    },
    SET_POST:(state, post) => {
      state.posts.push(post);
    },
    SET_PROCESSING(state, payload){
        state.processing = payload;
    },
    SET_USER(state, payload){
      state.user.isAuthenticated = true;
      state.user.role = payload.role;
      state.user.id = payload.id;
    },
    SET_SIGNOUT(state){
      state.user.isAuthenticated = false;
      state.user.role = "";
      state.user.id = "";
    }
  },
  actions: {
    SIGNOUT({commit}){
      commit('SET_PROCESSING', true);
      commit('SET_SIGNOUT');
      commit('SET_PROCESSING', false);
    },
    GET_POSTS_FROM_API({commit}){
      return axios.get('http://localhost:3000/posts')
      .then((res) => {
          commit('SET_POSTS_TO_STATE', res.data);   
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    // ADD_TO_POST({commit}, post){
    //   let {data}
    //   commit('SET_POST', post)
    ADD_TO_POST({commit}, post){
      return axios.post('http://localhost:3000/posts', post)
      .then((res) =>{
          if (res.status == 200){
            commit('SET_POST', post)
          }
        })
    },
    SIGNIN({commit}, payload){
      commit('SET_PROCESSING', true)
      return axios.get('http://localhost:3000/users', {
      })
      .then((res) => {
        for (let index = 0; index < res.data.length; index++) {
          if (payload.email == res.data[index].login && payload.password == res.data[index].password) {
            commit('SET_USER', res.data[index])
            // console.log(res.data) 
          }
          // console.log(res.data[index])
          // console.log(payload.email);  
          // const element = res.data[index];
          
        } 
        commit('SET_PROCESSING', false)
    })
    }
  },
  modules: {
  },
  getters:{
    POSTS(state){
      return state.posts;
    },
    getProcessing(state){
      return state.processing;
    },
    isUserAuthenticated(state){
      //.isAuthenticated
      return state.user.isAuthenticated;
    },
    lastPostId(state){
      return state.posts.length;
    },
    getUserRole(state){
      return state.user;
    }
  }
})

export default store;

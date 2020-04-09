import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../components/Signin'
import NewPost from '../components/NewPost'
import EditPost from '../components/EditPost'
import Store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/NewPost',
    name: 'NewPost',
    component: NewPost,
    meta: { authRequired: true}
  },
  {
    path: '/editPost',
    name: 'EditPost',
    component: EditPost,
    meta: { authRequired: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => 
{
  if(to.matched.some(route => route.meta.authRequired))
  {  
  if(Store.getters.isUserAuthenticated)
      next()
    else
      next('/')
  } else {
      next()
  }
})

export default router

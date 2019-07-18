import Vue from 'vue'
import Router from 'vue-router'

// 引入路由组件
import Home from '@/views/Home.vue'
import Deatil from '@/views/Deatil.vue'
import Question from '@/views/Question.vue'
import Type from '@/views/Type.vue'
import Imgdetail from '@/views/Imgdetail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Deatil
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/type',
      name: 'type',
      component: Type
    },
    {
      path: '/imgdetail',
      name: 'imgdetail',
      component: Imgdetail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    // }
  ]
})

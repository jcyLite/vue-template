import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '', component: ()=>import('../page/index.vue')},
      {
      	path:'/list',
      	component:()=>import('../page/list.vue')
      },
      {
      	path:'/sign',
      	component:()=>import('../page/sign.vue')
      },
      {
      	path:'/form',
      	component:()=>import('../page/form.vue')
      }
    ]
  })
}

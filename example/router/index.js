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
      	path:'/test',
      	component:()=>import('../test.vue')
      },
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
      },
      {
      	path:'/switch',
      	component:()=>import('../page/switch.vue')
      },
      {
      	path:'/menu',
      	component:()=>import('../page/menu.vue')
      },
      {
      	path:'/poper',
      	component:()=>import('../page/poper.vue')
      },
      {
      	path:'/image',
      	component:()=>import('../page/image.vue')
      },
      {
      	path:'/chat',
      	component:()=>import('../page/chat.vue')
      },
      {
      	path:'/upload',
      	component:()=>import('../page/upload.vue')
      },
      {
      	path:'/slide',
      	component:()=>import('../page/slide.vue')
      },
      {
      	path:'/other',
      	component:()=>import('../page/other.vue')
      }
    ]
  })
}

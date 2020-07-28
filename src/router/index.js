import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Two from '@/components/Two'
Vue.use(Router)
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve=>(require(["@/components/HelloWorld"],resolve))

    },
    {
      path: '/two',
      name: 'Two',
      component: Two,
      // beforeEnter: (to, from, next) => {
      //   console.log(to,from)
      // }

    }
  ]
})
// router.beforeEach((to, from, next) => {
//   console.log(to,from)
// })
export default router;
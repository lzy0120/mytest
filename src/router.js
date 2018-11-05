import Vue from 'vue'
import Router from 'vue-router'
// import { getVuex } from 'common/js/util'

Vue.use(Router)

// {
//   path: '/login',
//   name: 'login',
//   component: () => import('views/Login/Login')
// }
// path: '/details/:code'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/Login/Login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('views/Index/Index')
    },
    {
      path: '/details/:code',
      name: 'details',
      component: () => import('views/Details/Details')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   let pathName = to.name.toLowerCase()
//   // 根据当前路径名判断非登录页时，根据session内的token值来判断是否需要跳转至登录页
//   if (pathName !== 'login') {
//     let { token } = getVuex('token')
//     if (!token) {
//       next({
//         path: '/login'
//       })
//       return
//     }
//   }
//   next()
// })
//
export default router

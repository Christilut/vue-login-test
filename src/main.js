import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Login from './components/Login'
import Hello from './components/Hello'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/': {
      component: Hello
  },
  '/login': {
    component: Login
  }
})

// router.beforeEach(function () {
//   window.scrollTo(0, 0)
// })

router.redirect({
  '*': '/login'
})

router.start(App, '#app')

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: {
//     App
//   }
// })

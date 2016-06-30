import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Login from './components/Login'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/login': {
      component: Login
  }
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')

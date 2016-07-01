import Vue from 'vue'
import Router from 'vue-router'
import VueI18n from 'vue-i18n'

import App from './App'
import Login from './components/Login'

// setup i18n
Vue.use(VueI18n)
Vue.config.lang = 'en_US'

Vue.locale('en_US', require('../locale/en_US.json'))
Vue.locale('nl_NL', require('../locale/nl_NL.json'))

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

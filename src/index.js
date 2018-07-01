import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/' }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = 'GitHub Check System Kevin Justal'
  next()
})

new Vue({
    el: '#app',
    template: '<Home/>',
    components: { Home },
    router
}).$mount('#app')

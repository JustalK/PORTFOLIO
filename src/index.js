import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages/App'
import Home from './pages/Home'
import Test from './pages/Test'
import Header from './components/Header'

Vue.use(VueRouter);

Vue.component('my-header', Header);

const routes = [
  { path: '/', component: Home },
  { path: '/all', component: Test }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = 'GitHub Check System Kevin Justal 2'
  next()
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
}).$mount('#app')

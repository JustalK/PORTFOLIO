import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './pages/App';
import home from './pages/home';
import Articles from './pages/Articles';
import portfolio from './pages/portfolio';
import Project from './pages/Project';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'home', component: home },
	{ path: '/portfolio', name: 'portfolio', component: portfolio },
	{ path: '/portfolio/:name', name: 'project', component: Project },
	{ path: '/articles', name: 'articles', component: Articles }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	document.title = 'GitHub Check System Kevin Justal 2';
	next();
});

new Vue({
	el: '#app',
	components: { App },
	template: '<App/>',
	router
}).$mount('#app');

import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './pages/app';
import home from './pages/home';
import articles from './pages/articles';
import portfolio from './pages/portfolio';
import project from './pages/project';
import page_not_found from './pages/page_not_found';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'home', component: home },
	{ path: '/portfolio', name: 'portfolio', component: portfolio },
	{ path: '/portfolio/:slug', name: 'project', component: project },
	{ path: '/articles', name: 'articles', component: articles },
	{ path: '*', component: page_not_found }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
	el: '#app',
	components: { app },
	template: '<app/>',
	router
}).$mount('#app');

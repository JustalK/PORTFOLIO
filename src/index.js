import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './pages/app';
import home from './pages/home';
import articles from './pages/articles';
import portfolio from './pages/portfolio';
import project from './pages/project';

Vue.use(VueRouter);

const routes = [
	{ path: '/', name: 'home', component: home },
	{ path: '/portfolio', name: 'portfolio', component: portfolio },
	{ path: '/portfolio/:slug', name: 'project', component: project },
	{ path: '/articles', name: 'articles', component: articles }
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

const Vue = require("vue");
const VueRouter = require("vue-router");

Vue.use(VueRouter);

const routes: any[] = [

];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;

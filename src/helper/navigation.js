module.exports = {
	change_page(component, slug) {
		setTimeout(() => {
			component.$router.push({name: slug});
		},2000);
	}
};

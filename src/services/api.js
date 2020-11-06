import axios from 'axios';

const axios_call = async (url, params = {}) => {
	const result = await axios.get(url, params);
	if (result !== null && result.status === 200) {
		return result.data;
	}
	return null;
}

export default {
    get_projects: async () => {
		return axios_call('http://localhost:8080/api/articles');
	},
    get_projects_by_page: async (page=0,tags='') => {
		return axios_call('http://localhost:8080/api/articles', {params: {page: page, tags: tags}})
	},
	get_pages: async (name) => {
		return axios_call('http://localhost:8080/api/pages', {params: {name: name}});
	},
	get_project_by_id: async (id) => {
		return axios_call('http://localhost:8080/api/articles/one', {params: {id: id}});
	},
	get_project_by_slug: async (slug) => {
		return axios_call('http://localhost:8080/api/articles/one', {params: {slug: slug}});
	},
    get_tags: async () => {
		return axios_call('http://localhost:8080/api/tags');
	},
	get_my_identity: async () => {
		return axios_call('http://localhost:8080/api/contacts/my-identity');
	}
};

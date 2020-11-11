import axios from 'axios';
import utils from '../helper/utils';

const axios_call = async (url, params = {}) => {
	const result = await axios.get(url, params);
	if (result !== null && result.status === 200) {
		return result.data;
	}
	return null;
}

export default {
    get_projects: async () => {
		return axios_call(utils.get_server_address() + '/api/articles');
	},
    get_projects_by_page: async (page=0,tags='') => {
		return axios_call(utils.get_server_address() + '/api/articles', {params: {page: page, tags: tags}})
	},
	get_pages: async name => {
		return axios_call(utils.get_server_address() + '/api/pages', {params: {name: name}});
	},
	get_project_by_id: async id => {
		return axios_call(utils.get_server_address() + '/api/articles/one', {params: {id: id}});
	},
	get_project_by_slug: async slug => {
		return axios_call(utils.get_server_address() + '/api/articles/one', {params: {slug: slug, populate: true}});
	},
	get_slide_by_id: async id => {
		return axios_call(utils.get_server_address() + '/api/slides/one', {params: {id: id}});
	},
    get_tags: async () => {
		return axios_call(utils.get_server_address() + '/api/tags');
	},
	get_my_identity: async () => {
		return axios_call(utils.get_server_address() + '/api/contacts/my-identity');
	}
};

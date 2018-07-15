/* eslint-disable */
import axios from 'axios'

export default {
	getProjects () {
    	axios.get('/api/all')
    	.then(response => {
        	return response.data;
    	})
    }
}

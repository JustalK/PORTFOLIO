import Axios from 'axios'

const getProjects = function () {
    Axios.get('/api/all')
    .then(response => {
        return response.data;
    })
}

export default {
    getProjects: getProjects
}
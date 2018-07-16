import Axios from 'axios'

const getProjects = function () {
    return Axios.get('http://localhost:8080/api/all')
    .then(response => {
        return response.data;
    })
}

export default {
    getProjects: getProjects
}
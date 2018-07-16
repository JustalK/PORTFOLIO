import Axios from 'axios'

const getProjects = function () {
    return Axios.get('http://localhost:8080/api/articles/all')
    .then(response => {
        return response.data;
    })
}

const getTags = function () {
    return Axios.get('http://localhost:8080/api/tags/all')
    .then(response => {
        return response.data;
    })
}

export default {
    getProjects: getProjects,
    getTags: getTags
}
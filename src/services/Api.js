import Axios from 'axios'

const getProjects = function () {
    return Axios.get('http://localhost:8080/api/articles/all')
    .then(response => {
        return response.data;
    })
}

const getProjectsPage = function (page) {
    return Axios.get('http://localhost:8080/api/articles/' + page)
    .then(response => {
        return response.data;
    })
}

const getProject = function (name) {
    return Axios.get('http://localhost:8080/api/article/' + name)
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
    getProjectsPage: getProjectsPage,
    getProject: getProject,
    getTags: getTags
}
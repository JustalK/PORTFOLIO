import Axios from 'axios';

const getProjects = function () {
    return Axios.get('http://localhost:8080/api/articles')
        .then(response => {
            return response.data;
        });
};

const getProjectsPage = function (page=0,tags='') {
    return Axios.get('http://localhost:8080/api/articles', {page: page, tags: tags})
        .then(response => {
            return response.data;
        });
};

const getTags = function () {
    return Axios.get('http://localhost:8080/api/tags')
        .then(response => {
            return response.data;
        });
};

const get_my_identity = async () => {
    return Axios.get('http://localhost:8080/api/contacts/my-identity')
        .then(response => {
            return response.data;
        });
};

const getProject = function (name) {
    return Axios.get('http://localhost:8080/api/article/' + name)
        .then(response => {
            return response.data;
        });
};

const getNextProject = function (order) {
    return Axios.get('http://localhost:8080/api/article/next/' + order)
        .then(response => {
            return response.data;
        });
};

const getPrevProject = function (order) {
    return Axios.get('http://localhost:8080/api/article/prev/' + order)
        .then(response => {
            return response.data;
        });
};

export default {
    getProjects: getProjects,
    getProjectsPage: getProjectsPage,
    getProject: getProject,
    getNextProject: getNextProject,
    getPrevProject: getPrevProject,
    getTags: getTags,
	get_my_identity
};

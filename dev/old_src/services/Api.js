import Axios from 'axios';
var getProjects = function () {
    return Axios.get('http://localhost:8080/api/articles/all')
        .then(function (response) {
        return response.data;
    });
};
var getProjectsPage = function (page, tags) {
    if (page === void 0) { page = 0; }
    if (tags === void 0) { tags = ''; }
    return Axios.get('http://localhost:8080/api/articles', { page: page, tags: tags })
        .then(function (response) {
        return response.data;
    });
};
var getProject = function (name) {
    return Axios.get('http://localhost:8080/api/article/' + name)
        .then(function (response) {
        return response.data;
    });
};
var getNextProject = function (order) {
    return Axios.get('http://localhost:8080/api/article/next/' + order)
        .then(function (response) {
        return response.data;
    });
};
var getPrevProject = function (order) {
    return Axios.get('http://localhost:8080/api/article/prev/' + order)
        .then(function (response) {
        return response.data;
    });
};
var getTags = function () {
    return Axios.get('http://localhost:8080/api/tags')
        .then(function (response) {
        return response.data;
    });
};
export default {
    getProjects: getProjects,
    getProjectsPage: getProjectsPage,
    getProject: getProject,
    getNextProject: getNextProject,
    getPrevProject: getPrevProject,
    getTags: getTags
};

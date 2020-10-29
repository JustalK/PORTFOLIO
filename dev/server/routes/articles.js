'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var routes = express.Router();
var path = require('path');
var filename = path.basename(__filename, '.js');
var dbs = require('../dbs/' + filename);
var services = require('../services/' + filename)(dbs);
var constants = require('../libs/consts');
var utils = require('../libs/utils');
// Return the list of all the articles
routes.route('/').get(function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var params, limit, page, total_number_articles, max_page, skip, datas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {};
                utils.add_tags_filter(params, 'tags', request.query.tags);
                limit = constants.NUMBER_ARTICLES_BY_PAGE;
                page = request.query.page === undefined ? 0 : Number(request.query.page);
                return [4 /*yield*/, services.get_count(params)];
            case 1:
                total_number_articles = _a.sent();
                max_page = Math.floor((total_number_articles - 1) / limit) + 1;
                skip = page < 0 ? ((max_page - (-page % max_page)) % (max_page)) * limit : (page % (max_page)) * limit;
                return [4 /*yield*/, services.get_all(params, skip, limit)];
            case 2:
                datas = _a.sent();
                response.json(datas);
                return [2 /*return*/];
        }
    });
}); });
// Return the list of 4 articles max by page
/**
routes.route('/articles/:page').get((req, res, next) => {
    let findQuery = req.query.tags==undefined ? {} : {'tags' : { '$all' : req.query.tags }};
    Article.find(findQuery).countDocuments().exec((err, nbr) => {
        let maxpage = Math.floor((nbr - 1) / 4)+1;
        let skip = req.params.page<0 ? ((maxpage - (-req.params.page%maxpage))%(maxpage))*4 : (req.params.page%(maxpage))*4;
        Article.find(findQuery).skip(skip).limit(4).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, articles) => {
            if (err) return next(new Error(err));

            res.json(articles);
        });
    });
});

// Return the article with a particular slug
routes.route('/article/:name').get((req, res, next) => {
    Article.findOne({slug: req.params.name }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
        if (err) return next(new Error(err));
        res.json(article);
    });
});

// Return the next article
routes.route('/article/next/:order').get((req, res, next) => {
    Article.count().exec((err, nbr) => {
        let order = req.params.order*1+1<nbr ? req.params.order*1+1 : 0;
        Article.findOne({order: order }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
            if (err) return next(new Error(err));
            res.json(article);
        });
    });
});

// Return the previous article
routes.route('/article/prev/:order').get((req, res, next) => {
    Article.count().exec((err, nbr) => {
        console.log(req.params.order);
        let order = req.params.order*1-1>=0 ? req.params.order*1-1 : nbr-1;
        Article.findOne({order: order }).populate({path: 'tags',select: 'name'}).populate({path: 'images'}).exec((err, article) => {
            if (err) return next(new Error(err));
            res.json(article);
        });
    });
});
**/
module.exports = routes;

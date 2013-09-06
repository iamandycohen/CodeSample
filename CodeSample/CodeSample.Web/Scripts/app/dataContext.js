/// <reference path="~/Scripts/_references.js" />

var app = app || {};
app['dataContext'] = (function (app) {

    var getUrl = function (method) {
        /// <returns type="String" />
        return siteRoot + 'api/' + method;
    },
    getJson = function (method, callback) {
        $.get(getUrl(method))
            .done(callback);
    },
    postJson = function (method, data, callback) {
        $.ajax({
            type: 'POST',
            url: getUrl(method),
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        })
            .done(function () {
                callback();
            });
    },
    deleteRequest = function (method, callback) {
        $.ajax({
            type: 'DELETE',
            url: getUrl(method)
        })
            .done(function () {
                callback();
            });
    };

    return {
        getPages: function (callback) {
            getJson('Page', callback);
        },
        addPage: function (data, callback) {
            postJson('Page', data, callback);
        },
        updatePage: function (id, data, callback) {
            postJson('Page/' + id, data, callback);
        },
        deletePage: function (id, callback) {
            deleteRequest('Page/' + id, callback);
        }
    };

})(app);
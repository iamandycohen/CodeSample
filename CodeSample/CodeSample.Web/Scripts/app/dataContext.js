/// <reference path="~/Scripts/_references.js" />

var app = app || {};
app['dataContext'] = (function (app) {

    var getUrl = function (method) {
        /// <returns type="String" />
        return siteRoot + 'api/' + method;
    },
    getJson = function (method, callback) {
        $.get(getUrl(method))
            .done(callback)
            .fail(failure);
    },
    postJson = function (method, data, callback) {
        $.ajax({
            type: 'POST',
            url: getUrl(method),
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8'
        })
            .done(callback)
            .fail(failure);
    },
    deleteRequest = function (method, callback) {
        $.ajax({
            type: 'DELETE',
            url: getUrl(method)
        })
            .done(callback)
            .fail(failure);
    },
    failure = function (jqXHR) {
        var responseText = { Message: 'An error has occured.' };
        try {
            responseText = JSON.parse(jqXHR.responseText);
        } catch (e) {

        }
        toastr.error(JSON.stringify(responseText));
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
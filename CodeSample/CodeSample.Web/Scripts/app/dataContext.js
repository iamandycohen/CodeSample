/// <reference path="~/Scripts/_references.js" />

var app = app || {};
app['dataContext'] = (function (app) {

    var getUrl = function (method) {
        /// <returns type="String" />
        return siteRoot + 'api/' + method;
    },
    getJson = function (method, callback) {
        $.get(getUrl(method))
            .success(callback);
    };

    return {
        getPages: function (callback) {
            getJson('Page', callback);
        }
    };

})(app);
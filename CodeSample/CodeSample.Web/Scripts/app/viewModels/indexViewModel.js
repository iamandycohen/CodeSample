/// <reference path="~/Scripts/_references.js" />

var app = app || {};
app.viewModels = app.viewModels || {};

app.viewModels['indexViewModel'] = (function (app) {

    var pages = ko.observableArray([]),
        loadPages = function () {
            app.dataContext.getPages(loadPagesCallback);
        },
        loadPagesCallback = function (data) {
            pages(data);
        };

    return {
        init: function () {
            loadPages();
        },
        pages: pages
    };

})(app);
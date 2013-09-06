/// <reference path="~/Scripts/_references.js" />

var app = app || {};
app.viewModels = app.viewModels || {};

app.viewModels['indexViewModel'] = (function (app) {

    var pages = ko.observableArray([]),
        selectedPage = ko.observable(null),
        loadPages = function () {
            app.dataContext.getPages(loadPagesCallback);
        },
        loadPagesCallback = function (data) {
            pages(data);
        },
        addPage = function () {
            selectedPage(new app.models.Page());
        },
        editPage = function () {
            selectedPage(new app.models.Page(this));
        },
        savePage = function () {
            if (console && console.log) {
                console.log({ 'this': this, 'arguments': arguments });
            }
        };
        

    return {
        init: function () {
            loadPages();
        },
        pages: pages,
        selectedPage: selectedPage,
        addPage: addPage,
        editPage: editPage,
        savePage: savePage
    };

})(app);
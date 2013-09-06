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

            var errors = ko.validation.group(selectedPage());
            if (errors().length > 0) {
                errors.showAllMessages();
            } else {
                var toSave = ko.toJS(selectedPage);
                if (toSave.Id) {
                    app.dataContext.updatePage(toSave.Id, toSave, savePageCallback);
                } else {
                    app.dataContext.addPage(toSave, savePageCallback);
                }
            }
        },
        savePageCallback = function () {
            selectedPage(null);
            loadPages();
        },
        deletePage = function () {
            var id = ko.utils.unwrapObservable(this.Id);
            app.dataContext.deletePage(id, deletePageCallback);
        },
        deletePageCallback = function () {
            loadPages();
        },
        cancelEdit = function () {
            selectedPage(null);
        };
        

    return {
        init: function () {
            loadPages();
        },
        pages: pages,
        selectedPage: selectedPage,
        addPage: addPage,
        editPage: editPage,
        savePage: savePage,
        cancelEdit: cancelEdit,
        deletePage: deletePage
    };

})(app);
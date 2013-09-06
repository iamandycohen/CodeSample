/// <reference path="~/Scripts/_references.js" />

var app = app || {};
app.models = app.models || {};

app.models['Page'] = function (item) {
    var self = this;
    self.Id = ko.observable();
    self.Title = ko.observable();
    self.Content = ko.observable();

    if (typeof item !== 'undefined') {
        self.Id(item.Id);
        self.Title(item.Title);
        self.Content(item.Content);
    }
};
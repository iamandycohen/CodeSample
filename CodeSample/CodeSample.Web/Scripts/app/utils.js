/// <reference path="~/Scripts/_references.js" />

var app = app || {},
    siteRoot = window.siteRoot || '/';

app['utils'] = (function (app) {

    return {};

})(app);

toastr.options = {
    "debug": false,
    "positionClass": "toast-top-right",
    "onclick": null,
    "fadeIn": 300,
    "fadeOut": 1000,
    "timeOut": 5000,
    "extendedTimeOut": 1000
}
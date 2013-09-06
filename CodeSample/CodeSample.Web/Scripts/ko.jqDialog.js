/// <reference path="~/Scripts/_references.js" />

(function ($) {

    //custom binding to initialize a jQuery UI dialog
    ko.bindingHandlers.jqDialog = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var options = ko.utils.unwrapObservable(valueAccessor()) || {};

            //handle disposal
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).dialog("destroy");
            });

            $(element).dialog(options);
        }
    };

    ko.bindingHandlers.jqDialogTitle = {
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var title = ko.utils.unwrapObservable(valueAccessor()) || {};

            $(element).dialog('option', 'title', title);
        }
    };
    

    //custom binding handler that opens/closes the dialog
    ko.bindingHandlers.openDialog = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value) {
                $(element).dialog("open");
            } else {
                $(element).dialog("close");
            }
        }
    }
})(jQuery);
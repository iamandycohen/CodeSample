/// <reference path="~/Scripts/_references.js" />

(function ($) {

    //custom binding to initialize a jQuery UI dialog
    ko.bindingHandlers.jqMenu = {
        init: function (element, valueAccessor) {
            var options = ko.utils.unwrapObservable(valueAccessor()) || {};

            //handle disposal
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).menu("destroy");
            });

            $(element).menu(options);

        }
    };

})(jQuery);
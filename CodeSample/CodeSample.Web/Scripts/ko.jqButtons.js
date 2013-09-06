/// <reference path="~/Scripts/_references.js" />

(function ($) {

    //custom binding to initialize a jQuery UI dialog
    ko.bindingHandlers.jqButton = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var options = ko.utils.unwrapObservable(valueAccessor()) || {},
                showMenu = options.showMenu || {},
                $element = $(element);

            if (options.showMenu) {
                delete options.showMenu;
            }

            //handle disposal
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $element.button("destroy");
            });

            $element.button(options);

            if (showMenu.positionOf && showMenu.element) {

                $element.click(function () {
                    var $menu = $(showMenu.element).show()
                        .position({
                            my: "left top", at: "left bottom", of: $(showMenu.positionOf)
                        });

                    $(document).one("click", function () {
                        $menu.hide();
                    });
                    return false;
                });

            }

        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var options = ko.utils.unwrapObservable(valueAccessor()) || {},
                allBindings = ko.utils.unwrapObservable(allBindingsAccessor()) || {},
                label = ko.utils.unwrapObservable(allBindings.jqButtonLabel),
                $element = $(element);

            if (label) {
                $element.button('option', 'label', label);
            }
        }
    };

    ko.bindingHandlers.jqButtonDisable = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());

            if (value) {
                $(element).button('option', 'disabled', true);
            } else {
                $(element).button('option', 'disabled', false);
            }
        }
    };

    ko.bindingHandlers.jqButtonSet = {
        init: function (element, valueAccessor) {
            var options = ko.utils.unwrapObservable(valueAccessor()) || {};

            //handle disposal
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).buttonset("destroy");
            });

            $(element).buttonset(options);
        }
    };

})(jQuery);
/// <reference path="~/Scripts/_references.js" />

(function ($) {

	//custom binding to initialize a jQuery UI dialog
	ko.bindingHandlers.jqDatepicker = {
		init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		    var options = ko.utils.unwrapObservable(valueAccessor()) || {},
                $element = $(element);

			//handle disposal
			ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			    $element.datepicker("destroy");
			});

			$element.datepicker(options);
		},
		update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		    var allBindings = ko.utils.unwrapObservable(allBindingsAccessor()) || {},
                $element = $(element),
                disabled = ko.utils.unwrapObservable(allBindings.jqDatepickerDisabled) || false;

		    $element.datepicker('option', 'disabled', disabled);
		}
	};

})(jQuery);
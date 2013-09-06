/// <reference path="~/Scripts/_references.js" />

(function ($) {

	//custom binding to initialize a jQuery UI dialog
	ko.bindingHandlers.jqTabs = {
		init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

			var options = ko.utils.unwrapObservable(valueAccessor()) || {};

			//handle disposal
			ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
				$(element).tabs("destroy");
			});

			$(element).tabs(options);
		}
	};

})(jQuery);
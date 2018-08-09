var parentBlock;
var dropdownBlock;
var dropdownBtn;

$(document).ready(function () {

	$(".dropdown_wrapp").each(function() {

		dropdownBlock = $(this).find(".dropdown_block");

		if( dropdownBlock.is(":visible") ) {

			dropdownBlock.css({
				"display" : "none"
			});

			$(this).find(".dropdown_title .plus").addClass("init");

		}

	});


	$(".dropdown_title").click(function() {

		parentBlock = $(this).closest(".dropdown_wrapp");

		dropdownBlock = parentBlock.find(".dropdown_block");

		dropdownBtn = $(this).find(".plus");

		if( dropdownBlock.is(":hidden") ) {

			dropdownBlock.slideDown(300);

			dropdownBtn.addClass("active");

		} else {

			dropdownBlock.slideUp(300);

			dropdownBtn.removeClass("active");

		}

	});

});

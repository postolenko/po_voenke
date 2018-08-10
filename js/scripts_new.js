var indexActiveTab;
var tabsParent;
var attrForTabLink;
var activeTabRadio;

var parentBlock;
var dropdownBlock;
var dropdownBtn;

$(window).resize(function () {

	getTabLinksParams();

});

$(document).ready(function () {

	getTabLinksParams();

	$(".tabs").each(function() {

        $(this).find(".tab-link").each(function() {

            if( $(this).hasClass("active") ) {

                indexActiveTab = $(this).index(".tab-link");

                $(this).click();

                return false;

            } else {

                indexActiveTab = 0;

            }

        });

        $(this).find(".tab-link").eq(indexActiveTab).click();
        $(this).find(".tab-link").eq(indexActiveTab).addClass("active");

    });

    $(".tab-link").click(function (e) {

        if( $(this).hasClass("active") ) {

            e.preventDefault();

        } else {

            tabsParent = $(this).closest(".tabs");
            attrForTabLink = $(this).attr("for");
            activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
            activeTabRadio.prop("checked", true);

            tabsParent.find(".tab-link").each(function () {
                
                if( $(this).hasClass("active") ) {

                    $(this).removeClass("active")

                }

            });

            $(this).addClass("active");

        }

    });

    // -------------------------



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


function getTabLinksParams() {

	var offsetPadding = 40;
	var linkWidth;

	$(".tabs-links").each(function() {

		$(this).find(".tab-link_wrapp").each(function() {

			linkWidth = $(this).find(".tab-link").outerWidth(true) + offsetPadding;

			$(this).width(linkWidth);

		});

	});

}
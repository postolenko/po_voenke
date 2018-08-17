var indexActiveTab;
var tabsParent;
var attrForTabLink;
var activeTabRadio;

var parentBlock;
var dropdownBlock;
var dropdownBtn;

var slidingBlock;
var slidingBtn;

$(window).load(function () {



});

$(window).resize(function () {

	$(".tab-link_wrapp").css({
		"width" : "auto"
	});

	getTabsLinksParams();

});

$(document).ready(function () {

	getTabsLinksParams();

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

	// -------------------

	$(".sliding-block_wrapp").each(function() {

		slidingBlock = $(this).find(".sliding-block");

		slidingBtn = $(this).find(".sliding-btn");

		if( $(this).hasClass("active")) {			

			slidingBlock.slideDown(30);

			slidingBtn.addClass("active");

		} else {

			slidingBlock.slideUp(30);

			slidingBtn.removeClass("active");

		}

	});

	$(".sliding-btn").click(function() {

		parentBlock = $(this).closest(".sliding-block_wrapp");

		slidingBlock = parentBlock.find(".sliding-block");

		if(slidingBlock.is(":visible")) {

			slidingBlock.slideUp(600);

			$(this).removeClass("active");

		} else {

			slidingBlock.slideDown(600);

			$(this).addClass("active");

		}

	});

});

function getTabsLinksParams() {

	$(".tabs-links").each(function() {

		$(this).find(".tab-link_wrapp").each(function() {

			var linkWidth = $(this).width() + $(this).width()*.05;

			$(this).width(linkWidth);

		});

	});

}
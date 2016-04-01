define(['wrapper', 'jquery'], function (wrapper, $) {
    var getUrlHash = function () {
        return window.top.location.hash;
    };

    var scrollToSection = function ($section) {
        var sectionOffset = $section.offset().top;
        console.log(sectionOffset);
        wrapper.scrollTo({ position: sectionOffset, duration: 1000 });
    };

    var init = function () {
        var hash = getUrlHash();
        if (/^#section--[a-zA-Z]+$/.test(hash)) {
            var $section = $(hash);
            scrollToSection($section);
        }
    };

    return {
        init: init
    };
});

define(['wrapper', 'jquery', 'utils'], function (wrapper, $, utils) {
    var sectionElements = {
        'intro': {
            element: $('#section--intro'),
            reached: false
        },
        'one': {
            element: $('#section--one'),
            reached: false
        },
        'two': {
            element: $('#section--two'),
            reached: false
        },
        'three': {
            element: $('#section--three'),
            reached: false
        },
        'four': {
            element: $('#section--four'),
            reached: false
        },
        'five': {
            element: $('#section--five'),
            reached: false
        },
        'footer': {
            element: $('#section--footer'),
            reached: false
        }
    };

    var handleScroll = function () {
        for (var key in sectionElements) {
            if (utils.isElementInViewport(sectionElements[key].element)) {
                if (!sectionElements[key].reached) {
                    sectionElements[key].reached = true;
                    wrapper.callIstats({
                        actionName: 'newsspec-interaction',
                        actionType: 'section-' + key + '-reached',
                        viewLabel: true
                    });
                }
            }
        }
    };

    var setShareToolsLogging = function () {
        $('.share__tool').on('click', function () {
            var parent = $(this).parents('.bbc-news-vj-sharetools');
            var shareToolsIndex = parent.attr('id').substr('-1');
            wrapper.callIstats({
                actionName: 'newsspec-interaction',
                actionType: 'user-shared',
                viewLabel: shareToolsIndex
            });
        });
    };

    var init = function () {
        wrapper.onRawScroll(handleScroll);
        setShareToolsLogging();
    };

    return {
        init: init
    };
});

define(['wrapper', 'jquery'], function (wrapper, $) {

    var ProgressiveEnhancement = function () {};

    ProgressiveEnhancement.prototype = {
        init: function () {
            $( '.bbc-news-vj-video-wrapper--hero' ).css( 'display', 'inherit' );
            var self = this;
            self.resizer();
            $(window).resize(function(){
                self.resizer();
            });
        },
        resizer: function () {
            if (window.innerWidth > 1008){
                $( '.bbc-news-vj-wrapper ' ).css( 'padding-top', '60%' );
            } else {
                $( '.bbc-news-vj-wrapper ' ).css( 'padding-top', '0' );
            }
        }
    };

    return new ProgressiveEnhancement();

});

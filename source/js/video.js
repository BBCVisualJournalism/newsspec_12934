define(['jquery', 'bump-3', 'wrapper', 'utils'], function ($, bump, wrapper, utils) {

    var Video = function (videoContainerSelector, vpid, holdingImage, autoplay) {
        this.selector = videoContainerSelector;
        this.$videoContainer = $(this.selector);
        this.videoEl = bump(this.selector).find('.bbc-news-vj-video__player');
        this.vpid = vpid;
        this.holdingImage = holdingImage;
        this.autoplay = autoplay || false;
        this.mp = null;
        this.$overlay = this.$videoContainer.find('.bbc-news-vj-video__overlay');
        this.cta_breakpoint = 600;

        this.init();
    };

    Video.prototype = {
        init: function () {
            this.$videoContainer.on('click', this.playVideo.bind(this));

            var playerSettings = {
                product: 'news',
                playlistObject: {
                    items : [{
                        vpid : this.vpid
                    }],
                    holdingImageURL: this.holdingImage
                },
                responsive: true,
                autoplay: this.autoplay
            };
            this.mp = this.videoEl.player(playerSettings);
            this.mp.load();
            this.setEvents();

            if (this.getWindowWidth() >= this.cta_breakpoint) {
                this.disableSmpCta();
            }
        },

        setEvents: function () {
            this.mp.bind('ended', this.videoEnded.bind(this));
            this.mp.bind('playing', this.hideOverlay.bind(this));

            var self = this;
            $(window).on('resize', function () {
                if (self.getWindowWidth() >= self.cta_breakpoint) {
                    self.disableSmpCta();
                } else {
                    self.enableSmpCta();
                }
            });
            wrapper.onRawScroll(function (scrollTop){
                if (self.$videoContainer.attr('id') === 'bbc-news-vj-video--hero') {
                    if (!utils.isElementInViewport(self.$videoContainer)){
                        self.mp.pause();
                    }
                }
            });
        },

        playVideo: function () {
            this.hideOverlay();
            this.mp.play();
        },

        hideOverlay: function () {
            this.$overlay.addClass('bbc-news-vj-video__overlay--hidden');
        },

        videoEnded: function () {
            this.$overlay.removeClass('bbc-news-vj-video__overlay--hidden');
        },

        videoStop: function () {
            this.videoEnded();
            this.mp.stop();
        },

        getWindowWidth: function () {
            return $(window).width();
        },

        disableSmpCta: function () {
            var ui_config = {
                cta: { enabled: false }
            };
            this.mp.updateUiConfig(ui_config);
        },

        enableSmpCta: function () {
            var ui_config = {
                cta: { enabled: true }
            };
            this.mp.updateUiConfig(ui_config);
        }
    };

    return Video;
});
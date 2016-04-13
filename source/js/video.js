define(['jquery', 'bump-3', 'wrapper', 'utils'], function ($, bump, wrapper, utils) {

    var Video = function (videoContainerSelector, vpid, holdingImage, autoplay, embedURL, ctaEnabled, controlsEnabled) {
        this.mp = null;
        this.selector = videoContainerSelector;
        this.$videoContainer = $(this.selector);
        this.videoEl = bump(this.selector).find('.bbc-news-vj-video__player');
        this.vpid = vpid;
        this.holdingImage = holdingImage;
        this.autoplay = window.innerWidth < 1008 ? false : autoplay;
        this.$overlay = this.$videoContainer.find('.bbc-news-vj-video__overlay');
        this.embedURL = embedURL;
        this.ctaBreakpoint = 800;
        this.ctaEnabled = ctaEnabled;
        this.controlsEnabled = controlsEnabled;
        this.firstPlay = true;
        this.firstEnded = true;

        this.init();
    };

    Video.prototype = {
        init: function () {
            var playerSettings = {
                product: 'news',
                externalEmbedUrl: this.embedURL,
                playlistObject: {
                    embedRights: 'allowed',
                    items : [{
                        vpid : this.vpid
                    }],
                    holdingImageURL: this.holdingImage
                },
                ui: {
                    embed: {
                        enabled: true
                    }
                },
                responsive: true,
                autoplay: this.autoplay
            };
            this.mp = this.videoEl.player(playerSettings);
            this.mp.load();
            this.setEvents();

            this.setSmpCta(this.ctaEnabled);
            this.setSmpControls(this.controlsEnabled);

            if (this.getWindowWidth() >= this.ctaBreakpoint) {
                this.setSmpCta(false);
            }
        },

        setEvents: function () {
            this.mp.bind('initialised', this.playerReady.bind(this));
            this.mp.bind('ended', this.videoEnded.bind(this));
            this.mp.bind('playing', this.onPlaying.bind(this));

            var self = this;
            $(window).on('resize', function () {
                if (self.getWindowWidth() >= self.ctaBreakpoint) {
                    self.setSmpCta(false);
                } else {
                    self.setSmpCta(true);
                }
            });
            wrapper.onRawScroll(function (scrollTop){
                if (self.$videoContainer.attr('id') === 'bbc-news-vj-video--hero' && !utils.isElementInViewport(self.$videoContainer)) {
                    self.mp.pause();
                }
            });
        },

        playVideo: function () {
            if (window.innerWidth > 800){
                this.mp.play();
                this.hideOverlay();
            }
        },

        pause: function () {
            this.mp.pause();
        },

        onPlaying: function () {
            this.hideOverlay();
            $.emit('video-playing-' + this.selector);
            if (this.firstPlay) {
                this.firstPlay = false;
                var videoTitle = this.$videoContainer.find('.bbc-news-vj-video__overlay__text__title').text();
                wrapper.callIstats({
                    actionName: 'newsspec-interaction',
                    actionType: 'video-played',
                    viewLabel: videoTitle
                });
                if (this.$videoContainer.attr('id') === 'bbc-news-vj-video--hero' && !utils.isElementInViewport(this.$videoContainer)) {
                    this.mp.pause();
                }
            }
        },

        playerReady: function () {
            this.hideBgImg();
            this.$videoContainer.on('click', this.playVideo.bind(this));
            this.$overlay.removeClass('bbc-news-vj-video__overlay--hidden');
        },

        hideOverlay: function () {
            this.$overlay.addClass('bbc-news-vj-video__overlay--hidden');
        },

        hideBgImg: function () {
            //remove bg img of player container when player is loaded
            this.$videoContainer.css('background-image', 'none');
            $('.bbc-news-vj-video-wrapper--hero').css('background-image', 'none');
        },

        videoEnded: function () {
            this.$overlay.removeClass('bbc-news-vj-video__overlay--hidden');
            if (this.firstEnded) {
                this.firstEnded = false;
                var videoTitle = this.$videoContainer.find('.bbc-news-vj-video__overlay__text__title').text();
                wrapper.callIstats({
                    actionName: 'newsspec-interaction',
                    actionType: 'video-ended',
                    viewLabel: videoTitle
                });
            }
        },

        getWindowWidth: function () {
            return $(window).width();
        },

        setSmpCta: function (ctaEnabled) {
            var ui_config = {
                cta: { enabled: !!ctaEnabled }
            };
            this.mp.updateUiConfig(ui_config);
        },

        setSmpControls: function (controlsEnabled) {
            var ui_config = {
                controls: {
                    enabled: !!controlsEnabled,
                    always:  !!controlsEnabled,
                    spaceControlsPlayback: !controlsEnabled
                }
            };
            this.mp.updateUiConfig(ui_config);
        }
    };

    return Video;
});
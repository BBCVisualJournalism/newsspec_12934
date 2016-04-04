define(['wrapper', 'jquery', 'ShareTools', 'ShareToolsTemplate'], function (wrapper, $, ShareTools, ShareToolsTemplate) {
    var ShareToolsWrapper = function (selector) {
        this.selector = selector;
        this.$element = $(this.selector);
        this.shareMessage = this.$element.attr('data-message');
        this.shareUrl = this.$element.attr('data-url');
        this.shareImage = this.$element.attr('data-img');

        this.init();
    };

    ShareToolsWrapper.prototype = {
        init: function () {
            this.shareObject = new ShareTools({
                holderEl: this.selector,
                label: 'Share',
                shareUrl: this.shareUrl,
                messages: {
                    twitter: this.shareMessage,
                    facebook: {
                        title: this.shareMessage,
                        description: 'Shared via BBC News'
                    },
                    email: {
                        subject: 'Shared via BBC News',
                        message: this.shareMessage
                    },
                    app: {
                        shareEndpoint: 'bbcnewsapp://visualjournalism/share',
                        popup: false,
                        properties: {
                            title: this.shareMessage,
                            text: 'Shared via BBC News'
                        }
                    }
                },
                template: ShareToolsTemplate
            });

            this.setEvents();
        },

        setEvents: function () {
            var self = this;
            this.$element.on('click', function () {
                self.updateMessages(self.shareMessage, self.shareImage);
                self.updateURLs(self.shareUrl);
            });
        },

        updateMessages: function (message, shareImage) {
            this.shareObject.setMessages({
                twitter: message,
                facebook: {
                    title: message,
                    image: shareImage
                },
                email: {
                    subject: 'Shared via BBC News',
                    message: message
                }
            });
        },

        updateURLs: function (shareUrl) {
            this.shareObject.setShareUrl(shareUrl);
        }
    };

    return ShareToolsWrapper;
});
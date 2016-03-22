define(['wrapper', 'jquery', 'ShareToolsTemplate'], function (wrapper, $, ShareToolsTemplate) {
    var ShareTools = function (selector) {
        this.selector = selector;
        this.$element = $(this.selector);
        this.shareMessage = this.$element.attr('data-message');
        this.shareUrl = this.$element.attr('data-url');

        this.init();
    };

    ShareTools.prototype = {
        init: function () {
            console.log(this.shareMessage);
            wrapper.sharetools.init({
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
                        properties: {
                            title: 'App Title',
                            text: this.shareMessage
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
                self.updateMessages(self.shareMessage);
            });
        },

        updateMessages: function (message) {
            wrapper.sharetools.setMessages({
                twitter: message,
                facebook: {
                    title: message
                },
                email: {
                    subject: 'Shared via BBC News',
                    message: message
                }
            });
        }
    };

    return ShareTools;
});
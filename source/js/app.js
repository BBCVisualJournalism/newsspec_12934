define([
    'wrapper',
    'video',
    'sharetools',
    'istats_logger',
    'progressive_enhancement',
    'section_scroller'
], function (wrapper, Video, ShareTools, istatsLogger, ProgressiveEnhancement, sectionScroller) {

    //console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    var hero_holding_img;

    if (window.innerWidth > 1008){
        // desktop holding img
        hero_holding_img = 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/976xcecesinkde27.jpg';
    } else {
        // mobile holding img
        hero_holding_img = 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/976xsenade47.jpg';
    }
    new Video('#bbc-news-vj-video--hero',  'p03mmv1n', hero_holding_img, true);
    new Video('#bbc-news-vj-video--one',   'p03912vm', 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/mami-dog-cropped.jpg', false);
    new Video('#bbc-news-vj-video--two',   'p03912vm', 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/miriamde22.jpg', false);
    new Video('#bbc-news-vj-video--three', 'p03912vm', 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/daniele.jpg', false);
    new Video('#bbc-news-vj-video--four',  'p03912vm', 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/cecedreamy27.jpg', false);
    new Video('#bbc-news-vj-video--five',  'p03912vm', 'http://www.stage.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/sharon.jpg', false);

    new ShareTools('#bbc-news-vj-sharetools--1');
    new ShareTools('#bbc-news-vj-sharetools--2');
    new ShareTools('#bbc-news-vj-sharetools--3');
    new ShareTools('#bbc-news-vj-sharetools--4');
    new ShareTools('#bbc-news-vj-sharetools--5');

    istatsLogger.init();

    sectionScroller.init();

    wrapper.markPageAsLoaded();

    ProgressiveEnhancement.init();

});

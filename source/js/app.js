define(['wrapper', 'video', 'sharetools', 'istatsLogger', 'progressiveEnhancement'], function (wrapper, Video, ShareTools, istatsLogger, ProgressiveEnhancement) {

    //console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    var hero_holding_img;

    if (window.innerWidth > 1008){
        // desktop holding img
        hero_holding_img = 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/976xcecesinkde27.jpg?v=0.2.1';
    } else {
        // mobile holding img
        hero_holding_img = 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/976xsenade47.jpg?v=0.2.1';
    }
    new Video('#bbc-news-vj-video--hero',  'p03pzhl3', hero_holding_img, true);
    new Video('#bbc-news-vj-video--one',   'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/mami-dog-cropped.jpg?v=0.2.1', false);
    new Video('#bbc-news-vj-video--two',   'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/miriamde22.jpg?v=0.2.1', false);
    new Video('#bbc-news-vj-video--three', 'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/daniele.jpg?v=0.2.1', false);
    new Video('#bbc-news-vj-video--four',  'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/cecedreamy27.jpg?v=0.2.1', false);
    new Video('#bbc-news-vj-video--five',  'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/sharon.jpg?v=0.2.1', false);

    new ShareTools('#bbc-news-vj-sharetools--1');
    new ShareTools('#bbc-news-vj-sharetools--2');
    new ShareTools('#bbc-news-vj-sharetools--3');
    new ShareTools('#bbc-news-vj-sharetools--4');
    new ShareTools('#bbc-news-vj-sharetools--5');

    istatsLogger.init();

    wrapper.markPageAsLoaded();

    ProgressiveEnhancement.init();

});
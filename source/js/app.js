define(['wrapper', 'jquery', 'video', 'sharetools', 'istatsLogger', 'progressiveEnhancement', 'pubsub'], function (wrapper, $, Video, ShareTools, istatsLogger, ProgressiveEnhancement) {

    //console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    var hero_holding_img;

    var version = '0.3.6';

    if (window.innerWidth > 1008){
        // desktop holding img
        hero_holding_img = 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/976xcecesinkde27.jpg?v=' + version;
    } else {
        // mobile holding img
        hero_holding_img = 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/976xsenade47.jpg?v=' + version;
    }

    var videoSelectors = [
        '#bbc-news-vj-video--hero',
        '#bbc-news-vj-video--one',
        '#bbc-news-vj-video--two',
        '#bbc-news-vj-video--three',
        '#bbc-news-vj-video--four',
        '#bbc-news-vj-video--five'
    ];

    var videos = [
        new Video(videoSelectors[0], 'p03pzhl3', hero_holding_img, true, ''),
        new Video(videoSelectors[1], 'p03lsq25', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/mami-dog-cropped.jpg?v=' + version, false, 'http://www.bbc.co.uk/news/magazine-35726197/embed'),
        new Video(videoSelectors[2], 'p03lh2hm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/miriamde22.jpg?v=' + version, false, 'http://www.bbc.co.uk/news/magazine-35726190/embed'),
        new Video(videoSelectors[3], 'p03lhwrq', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/daniele.jpg?v=' + version, false, 'http://www.bbc.co.uk/news/magazine-35726193/embed'),
        new Video(videoSelectors[4], 'p03lst3b', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/cece_smile.jpg?v=' + version, false, 'http://www.bbc.co.uk/news/magazine-35726195/embed'),
        new Video(videoSelectors[5], 'p03lhhy4', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/sharon.jpg?v=' + version, false, 'http://www.bbc.co.uk/news/magazine-35726192/embed')
    ];

    function pauseVideo(index) {
        var videosToPause = videos.slice(0); // clone the videos array
        videosToPause.splice(index, 1);
        for (var i = 0; i < videosToPause.length; i++) {
            videosToPause[i].pause();
        }
    }

    function setAutopauseEvent(videoIndex) {
        $.on('video-playing-' + videoSelectors[videoIndex], function () {
            pauseVideo(videoIndex);
        });
    }

    for (var i = 0; i < videoSelectors.length; i++) {
        setAutopauseEvent(i);
    }

    new ShareTools('#bbc-news-vj-sharetools--1');
    new ShareTools('#bbc-news-vj-sharetools--2');
    new ShareTools('#bbc-news-vj-sharetools--3');
    new ShareTools('#bbc-news-vj-sharetools--4');
    new ShareTools('#bbc-news-vj-sharetools--5');

    istatsLogger.init();

    wrapper.markPageAsLoaded();

    ProgressiveEnhancement.init();

});
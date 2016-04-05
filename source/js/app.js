define(['wrapper', 'jquery', 'video', 'sharetools', 'istatsLogger', 'progressiveEnhancement', 'pubsub'], function (wrapper, $, Video, ShareTools, istatsLogger, ProgressiveEnhancement) {

    //console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    var hero_holding_img;

    var version = '0.2.3';

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
        new Video(videoSelectors[0],  'p03pzhl3', hero_holding_img, true),
        new Video(videoSelectors[1],   'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/mami-dog-cropped.jpg?v=' + version, false),
        new Video(videoSelectors[2],   'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/miriamde22.jpg?v=' + version, false),
        new Video(videoSelectors[3], 'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/daniele.jpg?v=' + version, false),
        new Video(videoSelectors[4],  'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/cece_smile.jpg?v=' + version, false),
        new Video(videoSelectors[5],  'p03912vm', 'http://newsimg.bbc.co.uk/news/special/2016/newsspec_12934/content/full-width/common/img/sharon.jpg?v=' + version, false)
    ];

    var pauseVideo = function (index) {
        var videosToPause = videos.slice(0);
        console.log('videosToPause before splice', videosToPause);
        console.log('splicing element ' + index);
        videosToPause.splice(index, 1);
        console.log('videosToPause after splice', videosToPause);
        for (var i = 0; i < videosToPause.length; i++) {
            videosToPause[i].pause();
        }
        console.log(videos);
    };

    // this doesn't work ;-;
    // for (var i = 0; i < videoSelectors.length; i++) {
    //     $.on('video-playing-' + videoSelectors[i], function () {
    //         pauseVideo(i);
    //     });
    // }

    $.on('video-playing-' + videoSelectors[0], function () {
        pauseVideo(0);
    });
    $.on('video-playing-' + videoSelectors[1], function () {
        pauseVideo(1);
    });
    $.on('video-playing-' + videoSelectors[2], function () {
        pauseVideo(2);
    });
    $.on('video-playing-' + videoSelectors[3], function () {
        pauseVideo(3);
    });
    $.on('video-playing-' + videoSelectors[4], function () {
        pauseVideo(4);
    });
    $.on('video-playing-' + videoSelectors[5], function () {
        pauseVideo(5);
    });

    new ShareTools('#bbc-news-vj-sharetools--1');
    new ShareTools('#bbc-news-vj-sharetools--2');
    new ShareTools('#bbc-news-vj-sharetools--3');
    new ShareTools('#bbc-news-vj-sharetools--4');
    new ShareTools('#bbc-news-vj-sharetools--5');

    istatsLogger.init();

    wrapper.markPageAsLoaded();

    ProgressiveEnhancement.init();

});
define(['wrapper', 'video', 'sharetools'], function (wrapper, Video, ShareTools) {

    console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    new Video('#bbc-news-vj-video--hero',  'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg', true);
    new Video('#bbc-news-vj-video--one',   'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg', false);
    new Video('#bbc-news-vj-video--two',   'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg', false);
    new Video('#bbc-news-vj-video--three', 'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg', false);
    new Video('#bbc-news-vj-video--four',  'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg', false);
    new Video('#bbc-news-vj-video--five',  'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg', false);

    new ShareTools('#bbc-news-vj-sharetools--1');
    new ShareTools('#bbc-news-vj-sharetools--2');
    new ShareTools('#bbc-news-vj-sharetools--3');
    new ShareTools('#bbc-news-vj-sharetools--4');
    new ShareTools('#bbc-news-vj-sharetools--5');

    wrapper.markPageAsLoaded();
});
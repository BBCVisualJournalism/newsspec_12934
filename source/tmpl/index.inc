<div class="hero">
    <div class="bbc-news-vj-grid-wrapper">
        <div class="bbc-news-vj-grid-wrapper__fluid-inner">
            <div class="hero__titles">
                <h1 class="hero__heading"><%= hero_title %></h1>
                <p class="hero__subheading"><%= hero_subtitle %></p>
            </div>
        </div>
    </div>
</div>

<div class="bbc-news-vj-grid-wrapper">
    <div class="bbc-news-vj-grid-wrapper__fluid-inner">
        <ul class="meta-list">
            <li class="meta-list__item meta-list__item--timestamp">
                <time datetime="2016-04-01"><%= timestamp %></time>
            </li>
            <li class="meta-list__item meta-list__item--topic">
                <a href="<%= topic_link %>"><%= topic_label %></a>
            </li>
        </ul>

        <p class="intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
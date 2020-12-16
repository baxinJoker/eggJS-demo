<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
    <script src="public/js/jquery-1.7.2.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="#">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
    <div>
    {{ helper.format() }}
    {{ helper.relativeTime(item.time) }}
    </div>
    <input type="text" id="item-value"/>
    <button id="item-add">添加</button>
  </body>
  <script type='text/javascript' src='public/js/news.js'></script>
</html>
const mysql = require('../util/dbConfig').mysql

// exports.keys = ''//cookie
exports.keys = 'username=smileBaxin; '//cookie
exports.security = {
    csrf: {
        // headerName: 'x-csrf-token',// 自定义请求头
        enable: false
    }
}

exports.view = {//页面模板
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};
exports.mysql = {
    client: {
        host: mysql.host,
        port: mysql.port,
        user: mysql.username,
        password: mysql.password,
        database: mysql.dbName
    },
    app: true,
    agent: false
}
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
exports.middleware = [
    'robot'
]
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};
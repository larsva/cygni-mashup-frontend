"use strict";

((app) => {

    let path = require('path');
    let express = require('express');
    let morgan = require('morgan');
    let apiProxy = require('http-proxy-middleware');
    let configuration = require('./configuration');

    let proxy = apiProxy('/api/*',configuration.proxyOptions);

    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'jade');
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.use(proxy);

    app.use(morgan(configuration.logType));

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/mashup/:mbid', function (req, res) {
        res.render('index');
    });

    app.get('/templates/:template', function (req, res) {
        res.render('templates/' + req.params.template);
    });


  app.listen(configuration.port, () => console.log(`App listening on port ${configuration.port}`));

})(require('express')());


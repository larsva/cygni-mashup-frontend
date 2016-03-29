"use strict";

((app) => {

    let path = require('path');
    let express = require('express');
    let morgan = require('morgan');
    let httpProxy = require('http-proxy');
    let configuration = require('./configuration');

    let apiProxy = httpProxy.createProxyServer();
    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'jade');
    app.use(express.static(path.join(__dirname, '..', 'public')));

    app.use(morgan(configuration.logType));

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/templates/:template', function (req, res) {
        res.render('templates/' + req.params.template);
    });

    app.all('/mashup/*', function(req, res) {
      apiProxy.web(req, res, {target: configuration.apiForwardingUrl});
    });


  app.listen(configuration.port, () => console.log(`App listening on port ${configuration.port}`));

})(require('express')());


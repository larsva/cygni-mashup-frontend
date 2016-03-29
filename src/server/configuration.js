"use strict";

module.exports.port = process.env.PORT || 3000;
module.exports.defaultTimeout = process.env.DEFAULT_TIMEOUT || 5000;
module.exports.logType = process.env.LOG_TYPE || 'dev';
module.exports.proxyOptions = {
  target: "http://localhost:3001/",
  pathRewrite: {
    '^/api': '/mashup'
  }
};

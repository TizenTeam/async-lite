//var async = require('async-lite');
var async = require('./async-lite.js');

async.waterfall(
    [
      function(callback) {
        callback(null, [1]);
      },
      function(results, callback) {
          callback(null, results.concat(2));
      },
      function(results, callback) {
          callback(null, results.concat(3));
      },
    ],
    function(err, res) {
        if (err) throw err;
        console.log(res);
    });

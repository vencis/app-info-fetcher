/* Required libs
 npm install app-store-scraper
 npm install google-play-scraper 
*/

var http = require('http');
var url = require("url");
var gplay = require('google-play-scraper');
var appstore = require('app-store-scraper');

//create a server object:
http.createServer(function(request, response) {

    var parsedUrl = url.parse(request.url, true); // true to get query as object
    var queryAsObject = parsedUrl.query;

    if (typeof queryAsObject['id'] === 'undefined' || typeof queryAsObject['store'] === 'undefined') {
        response.statusCode = 500;
        response.end("Missing required 'id' or 'store' parameter");
    } else {

        if (queryAsObject['store'] === 'appstore') {
            appstore.app({ id: queryAsObject['id'] }).then(function(result) {
                response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                response.write(JSON.stringify(result));
                response.end();
            }).catch(console.log);
        } else if (queryAsObject['store'] === 'gplay') {
            gplay.app({ appId: queryAsObject['id'],throttle: 10 }).then(function(result) {
                response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                response.write(JSON.stringify(result));
                response.end();
            }).catch(console.log);
        } else {
            response.statusCode = 500;
            response.end('Available store param values are gplay or appstore');
        }
    }
}).listen(8080); //the server object listens on port 8080

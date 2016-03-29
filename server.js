/**
 * Created by OsamaArshad on 3/30/2016.
 */
var http = require("http");
fs = require('fs');

var port=Number(process.env.PORT||3000);

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    })
    .listen(port);
});
console.log('Server running at http://localhost:3000/');
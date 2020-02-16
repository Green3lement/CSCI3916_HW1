var http = require ("http");
var server = http.createServer();

server.on("request", (request, response) => {
    var body = [];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request
        .on("end", () => {
            //let bodyString = body.concat.toString();
            console.log(body);
            response.end(body);
        })
        .on("error", () => {
            response.statusCode = 400;
            response.end();
        });
    response.on("error", err => {
        console.err(err);
    });
});
server.listen(process.env.PORT || 8008, () => {
    console.log("Server listening at 8008");
});

module.exports = server;
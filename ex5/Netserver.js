var net = require("net");
var server = net.createServer(function(connection) {
    console.log('Client connected.');
    connection.on('end', function() {
        console.log('Client disconnected.');
    });
    connection.write('Hello javid.... how are you ?!\n');
    connection.pipe(connection);
});
server.listen(5000, function() {
    console.log('Server is listening.');
});

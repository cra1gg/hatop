const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000

// to create a server, we need to pass a listener 
// Which is a fucntion that runs when we process a request, 
// and then sends a response
// note: the express app qualifies as a request handler
const server = http.createServer(app);

// starts listening on this port
server.listen(port);
console.log('Server started on port %s', server.address().port);

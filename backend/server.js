const app = require("./app");
const port = process.env.PORT || 3000

//app.listen()
var server = app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})

//let io = require('socket.io')(server);

const express = require('express');
const PORT = 3000 || process.env.PORT;
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

// Initialize express app
const app = express();
// Create a server, this will allow us to use socket.io more clearly
const server = http.createServer(app);
// Init socket 
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// 
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Run server on specfied port
server.listen(PORT, () => {
    console.log(`MadMath server listening at http://localhost:${PORT}`)
});

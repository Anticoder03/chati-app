const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const helmet = require('helmet');

app.use(express.static('public'));
app.use(helmet());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Add error handling
    socket.on('error', (error) => {
        console.error('Socket error:', error);
    });

    socket.on('connect_error', (error) => {
        console.error('Connection error:', error);
    });

    // Handle new user joining
    socket.on('new user', (username) => {
        socket.username = username;
        io.emit('user joined', username);
    });

    // Handle chat messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', {
            username: socket.username,
            message: msg
        });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        if (socket.username) {
            io.emit('user left', socket.username);
        }
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
}); 
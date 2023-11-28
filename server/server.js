const express = require('express')
const app = express()
const cors = require('cors')
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:'*'
    }
});
const port = 3002

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("sent message", (msg)=>{
        socket.broadcast.emit(
            "sent message",msg
        )
    })
});


server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
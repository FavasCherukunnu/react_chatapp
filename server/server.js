
const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { UserModel } = require('./models/user');

dotenv.config();
mongoose.connect(process.env.MONGDBURL).then(
    ()=>{
        console.log('connected succesfully')
    }
).catch(
    err=>console.log('error connecting database',err)
);

const server = http.createServer(app)
const port = process.env.PORT



app.get('/', (req, res) => {
    res.send('Hello World!')
})



server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});
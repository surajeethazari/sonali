const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const server = require('http').createServer(app);
const io = require('socket.io')(server);
require("dotenv").config();

// middleware
const corsOptions = {
    origin: true // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));


let userRoter = require("./routes/client");
app.use("/client", userRoter);

io.on('connection', (socket) => {
    console.log('Client connected');
    // Send notification to client
    socket.emit('notification', { message: 'New notification message' });
});

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    server.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});




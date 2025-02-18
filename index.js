const http=require('http');
const path=require('path');
const express=require('express');
const app=express();
const server=http.createServer(app);
const {Server}=require('socket.io');
const io=new Server(server);
app.get('/',(req,res)=>{
    const filePath = path.join(__dirname, './views', 'index.html');
    res.sendFile(filePath);
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
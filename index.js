const express=require('express')
const path=require('path')
const http=require('http')
const app=express()
const socketio=require('socket.io')
const server=http.createServer(app)
const io=socketio(server)

io.on('connection', (socket) => {  
  // Emit a welcome message to the connecting client
  socket.emit('message', 'Welcome to chatcord');

  // Emit a message to everyone except the connecting client
  socket.broadcast.emit('message', 'A user has joined the chat');

  // Emit a message to everyone (including the connecting client)
  // io.emit('message', 'A user has joined the chat');
  socket.on("disconnect",(socket)=>{
    io.emit('message','User disconnected');
  })

  socket.on("chatmessage",(message)=>{
    console.log(message)
  })

});





app.use(express.static(path.join(__dirname,'views')))
const PORT=3000;


server.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`)
}
)

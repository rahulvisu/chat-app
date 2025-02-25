const socket=io();

const chatform=document.getElementById('chatformin');

chatform.addEventListener("submit",(e)=>{
        e.preventDefault();
        const message=e.target.elements.msg.value;
        socket.emit('chatmessage',message)
        e.target.elements.msg.value="";

socket.on('chatmessage',(message)=>{
    console.log(message)
})

})
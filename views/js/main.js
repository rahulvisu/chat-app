const socket=io();

const chatform=document.getElementById('chatformin');

socket.on('message',(message)=>{
    const msg=message;
    console.log(msg)
    AddToInterface(msg)
})




chatform.addEventListener("submit",(e)=>{
        e.preventDefault();
        const message=e.target.elements.msg.value;
        socket.emit('chatmessage',message)
        
        e.target.elements.msg.value="";

        //AddToInterface(message)
         
       

socket.on('chatmessage',(message)=>{
    console.log(message)
})

})



function AddToInterface(mesg) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${mesg.username} <span>${mesg.time}</span></p>
                     <p class="text">${mesg.msg}</p>`;
    document.querySelector('.chat-messages').appendChild(div);
    document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
}
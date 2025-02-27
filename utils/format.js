

function formatMessage(username, msg) {
    const now = new Date();
    const time = now.getHours() + ':' + now.getMinutes() + ' ' + (now.getHours() >= 12 ? 'PM' : 'AM');
    
    return {
        username,
        msg,
        time
    };
}

module.exports = formatMessage;
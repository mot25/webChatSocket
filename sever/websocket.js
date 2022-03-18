const ws = require('ws')

const wss = new ws.Server({
    port: 5000
},
    () => console.log('5000 start server'))


wss.on('connection', function connection(ws) {
    ws.on('message', (message) => {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                broadCastMessage(message)
                break;
            case 'connection':
                broadCastMessage(message)
                break;
        }
    })
})



function broadCastMessage(message) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message));
    })
}

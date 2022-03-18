const express = require('express');
const cors = require('cors');
const events = require('events');

const PORT = 5000
// способ управлениями событий ноды 
const emitter = new events.EventEmitter();

// запускаем сервер
const app = express()

app.use(cors())
app.use(express.json())

// прнимает get запросы
app.get('/get-message', ((req, res) => {
    // осведомить что пользователь отправил сообщения рег события с названием newMessage
    emitter.once('newMessage', (msg) => {
        res.json(msg)
    })
}))


// прнимает post запросы
app.post('/new-message', ((req, res) => {
    const message = req.body
    emitter.emit('newMessage', message)
    res.status(200)
}))










// прослушиваем сервер
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
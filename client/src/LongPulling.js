import React, { useEffect, useState } from 'react'
import axios from 'axios'


const LongPulling = () => {
    const [message, setmessage] = useState([]);
    const [value, setvalue] = useState('')

    const sendMessage = async () => {
        setvalue('')
        await axios.post('http://localhost:5000/new-message', {
            message: value,
            id: Date.now()
        })
    }

    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/get-message')
            setmessage(prev => [data, ...prev])
            await subscribe()
        } catch (e) {
            setTimeout(() => subscribe, 5000)
        }
    }

    return (
        <div className="center">
            <div>
                <div className='form'>
                    <input value={value} onChange={e => setvalue(e.target.value)} type="text" />
                    <button onClick={sendMessage} > send</button>
                </div>
                <div className="messages">
                    {message.map(msg =>
                        <div className='message' key={msg.id}>
                            {msg.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LongPulling
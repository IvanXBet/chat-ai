import React, { useState } from 'react'
import ChatInput from '../ChatInput/ChatInput'
import ChatDisplay from '../ChatDisplay/ChatDisplay'
import './Chat.css'

const Chat = () => {
	const [messages, setMessages] = useState([])

	const sendMessage = text => {
		const newMessage = {
			sender: 'Me',
			text: text,
		}
		setMessages([...messages, newMessage])
	}

	return (
		<div className='chat-container'>
			<div className='Chat'>
				<h1></h1>
				<ChatDisplay messages={messages} />
				<ChatInput sendMessage={sendMessage} />
			</div>
		</div>
	)
}

export default Chat

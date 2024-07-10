import React from 'react'
import './ChatDisplay.css'

const ChatDisplay = ({ messages }) => {
	return (
		<div className='chat-messages'>
			{messages.map((message, index) => (
				<div key={index} className='chat-message'>
					<strong>{message.sender}: </strong>
					<span>{message.text}</span>
				</div>
			))}
		</div>
	)
}

export default ChatDisplay

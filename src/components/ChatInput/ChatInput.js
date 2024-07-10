import React, { useState } from 'react'
import Button from '../ui/Button/Button.js'
import InputField from '../ui/InputField/InputField.js'
import './ChatInput.css'


const ChatInput = ({ sendMessage }) => {
	const [message, setMessage] = useState('')

	const handleMessageChange = e => {
		setMessage(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		sendMessage(message)
		setMessage('')
	}

	return (
		<div className='chat-input-container'>
			<form className='chat-input-form' onSubmit={handleSubmit}>
				<InputField
					type='text'
					placeholder='Введите сообщение...'
					value={message}
					onChange={handleMessageChange}
				/>
				<Button onClick={handleSubmit} type='submit'>
					Отправить
				</Button>
			</form>
		</div>
	)
}

export default ChatInput
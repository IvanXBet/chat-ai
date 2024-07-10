import React, { useState } from 'react'
import Button from '../ui/Button/Button.js'
import InputField from '../ui/InputField/InputField.js'
import './entry.css'

const Entry = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const [errorMsg, setErrorMsg] = useState(null)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()

		const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
		if (!emailRegex.test(formData.email)) {
			setErrorMsg('Некорректный формат email')
			return
		}

		setErrorMsg(null)
		console.log(formData)
	}

	return (
		<div className='registration-form-container'>
			<div className='registration-form'>
				<h2 className='title'>Вход в Ai-Chat</h2>
				{errorMsg ? <div className='error-message'>{errorMsg}</div> : false}
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<InputField
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							placeholder='Email'
						/>
					</div>
					<div className='form-group'>
						<InputField
							type='password'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							required
							placeholder='Пароль'
						/>
					</div>
					<Button className='btn-reg-sub' onClick={handleSubmit} type='submit'>
						Войти
					</Button>
				</form>
			</div>
		</div>
	)
}

export default Entry

// InputField.js
import React from 'react'
import PropTypes from 'prop-types'
import './InputField.css' // стилизация поля ввода

const InputField = ({
	type = 'text',
	name,
	value,
	onChange,
	placeholder = '',
	className = '',
}) => {
	return (
		<input
			type={type}
			className={`input-field ${className}`}
			value={value}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

InputField.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	className: PropTypes.string,
}

export default InputField

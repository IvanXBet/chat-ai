import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
	
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<ul className='navbar-main'>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li>
						<Link to='/chat'>Чат</Link>
					</li>
				</ul>

				<ul className='navbar-profile'>
					<li>
						<Link to='/registration'>Регистрация</Link>
					</li>
					<li>
						<Link to='/entry'>Войти</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar

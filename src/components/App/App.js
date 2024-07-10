import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import NavBar from '../NavBar/NavBar';
import Registration from '../registration/registration';
import Entry from '../entry/entry';
import Chat from '../Chat/Chat';

function App() {
	return (
		<Router>
			<div>
				<NavBar/>

				<Routes>
					<Route path='/chat' element={<Chat />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/entry' element={<Entry />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App

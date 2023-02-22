// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  


function App() {
	const [mode, setmode] = useState('dark');
	const [alert, setAlert] = useState(null);
	const [textlight, setTextLight] = useState('light');

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		})

	}
	const toggleMode = () => {
		if (mode === 'dark') {
			setmode('light');
			setTextLight('dark');
			document.body.style.backgroundColor = 'grey';
		}
		else {
			setmode('dark');
			setTextLight('light');
			document.body.style.backgroundColor = 'white';
		}
	}
	return (
		<Router>
		<>
			

				<Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} ></Navbar>
				{/* <Navbar ></Navbar> */}
				<strong>
					<Alert alert={alert}></Alert>
				</strong>
				<TextForm heading="Enter The Text To Analyze" mode={mode}></TextForm>

				{/* <div className="container my-3">


					 <About></About> 

				</div>
				
				<div className='container'>
					<About></About>
				</div> */}

				{/* <Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<TextForm heading="Enter The Text To Analyze" mode={mode}></TextForm>
					</Route>
				</Switch> */}
			

		</>
		</Router>

	);
}

export default App;

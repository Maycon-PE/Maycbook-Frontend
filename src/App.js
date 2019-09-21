import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Routes from './routes'

import GlobalStyles from './styles'

const App = () =>
	<Router>
		<GlobalStyles />
		<Routes />
		<ToastContainer 
			position="bottom-left"
			autoClose={3000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnVisibilityChange
			draggable
			pauseOnHover />
	</Router>

export default App

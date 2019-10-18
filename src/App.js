import React from 'react'
import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import store from './Global/redux/store'

import 'react-toastify/dist/ReactToastify.min.css'


import Routes from './routes'

import GlobalStyles from './styles'

const App = () =>
	<Router>
		<Provider store={ store }>
			<GlobalStyles />
			<Routes />
			<ToastContainer 
				position="bottom-left"
				autoClose={7000}
				newestOnTop={false}
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover />
			</Provider>
	</Router>

export default App

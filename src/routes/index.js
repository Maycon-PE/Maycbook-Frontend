import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'

const Routes = () =>
	<Switch>
		<Route exact path='/' component={Home} />
		<Redirect from='*' to='/' />
	</Switch>

export default Routes

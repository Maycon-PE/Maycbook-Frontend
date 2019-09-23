import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Dashboard from './Dashboard'

const Routes = () =>
	<Switch>
		<Route exact path='/' component={ Home } />
		<Route exact path='/maycbook' component={ Dashboard } />
		<Redirect from='*' to='/' />
	</Switch>

export default Routes

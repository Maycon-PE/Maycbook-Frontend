import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import Dashboard from './Dashboard'
import Post from './Dashboard/pages/Post'
import PrivateRoute from './private'

const Routes = () =>
	<Switch>
		<Route exact path='/' component={ Home } />
		<PrivateRoute exact path='/maycbook' component={ Dashboard } />
		<PrivateRoute exact path='/maycbook/post/:id' component={ Post } />
		<Redirect from='*' to='/' />
	</Switch>

export default Routes

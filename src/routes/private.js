import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

import local from '../Global/functions/localStorage'

const isAuth = () => {
	if (!local.get()) {
		toast.error('Sem token')
		return false
	}

	return true 
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )}
    />
  )
}

export default PrivateRoute
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import payload from '../../../../../../Global/redux/reducers/actions/payload'

import validOrError from '../../../../../../Global/functions/validOrError'
import local from '../../../../../../Global/functions/localStorage'
import Erro from '../../../../../../Global/Components/Erro'

//Toasts
import InvalidAccount from '../../../Toasts/InvalidAccount'

import * as requests from './requests'

import {
	Form as FormStyled,
	AllInputsGroup as AllInputsGroupStyled,
	InputGroup as InputGroupStyled,
	Submit as SubmitStyled
} from './styles'

const Access = ({ push, success }) => {
	const [data, setData] = useState({})

	const submit = e => {

		e.preventDefault()

		try {

			validOrError('email', data.email)
			validOrError('password', data.password)

			data.password = data.password.toLowerCase()

			requests
				.login(data)
				.then(res => {
					success(res)
					local.set(res.token)

					if (push) push(`/maycbook`)
					else toast.error('Erro no redirecionamento, tente novamente!')

				}).catch(() => {
					toast.warn(<InvalidAccount />)
				})
			
		} catch (e) {

			if (e === null) return toast.error(<Erro />, { autoClose: false })

			typeof e === 'string' && toast.error(e)
		}

	}

	return (
		<FormStyled onSubmit={ submit }>
		<AllInputsGroupStyled>
			<InputGroupStyled>

				<label htmlFor='$access_email$'> email </label>
				<input 
					id='$access_email$' 
					type='email' 
					minLength='7'
					placeholder='digite seu email' 
					required 
					onChange={({ target }) => setData({ ...data, email: target.value })} />

			</InputGroupStyled>
			<InputGroupStyled>

				<label htmlFor='$access_password$'> senha </label>
				<input 
					id='$access_password$' 
					type='password' 
					minLength='3' maxLength='14' 
					placeholder='digite sua senha' 
					required 
					onChange={({ target }) => setData({ ...data, password: target.value })} />

			</InputGroupStyled>
		</AllInputsGroupStyled>
		<SubmitStyled>
			entrar
		</SubmitStyled>
	</FormStyled>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		success: data => {
			dispatch(payload.call(data))
		}
	}
}

const mapStateToProps = state => ({ push: state.push })

export default connect( mapStateToProps, mapDispatchToProps )(Access)

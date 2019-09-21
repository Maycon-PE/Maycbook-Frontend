import React, { useState } from 'react'
import { toast } from 'react-toastify'

import validOrError from '../../../../../Global/functions/validOrError'

import Erro from '../../../../../Global/Components/Erro'

import {
	Form as FormStyled,
	AllInputsGroup as AllInputsGroupStyled,
	InputGroup as InputGroupStyled,
	Submit as SubmitStyled
} from './styles'

const Access = () => {
	const [data, setData] = useState({})

	return (
		<FormStyled onSubmit={e => {

		e.preventDefault()

		try {

			validOrError('email', data.email)
			validOrError('password', data.password)

			// OK ...
		} catch (e) {

			if (e === null) return toast.error(<Erro />, { autoClose: false })

			typeof e === 'string' && toast.error(e)
		}
	}}>
		<AllInputsGroupStyled>
			<InputGroupStyled>

				<label htmlFor='$access_email$'> email </label>
				<input 
					id='$access_email$' 
					type='email' 
					minLength='7'
					placeholder='digite seu email' 
					required 
					value={ data.email }
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
					value={ data.password }
					onChange={({ target }) => setData({ ...data, password: target.value })} />

			</InputGroupStyled>
		</AllInputsGroupStyled>
		<SubmitStyled>
			entrar
		</SubmitStyled>
	</FormStyled>
	)
}

export default Access

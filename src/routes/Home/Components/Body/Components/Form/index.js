import React, { useState } from 'react'
import { toast } from 'react-toastify'

import validOrError from '../../../../../Global/functions/validOrError'
import Erro from '../../../../../Global/Components/Erro'

import {
	Form as FormStyled,
	InputArea as InputAreaStyled,
	InputsGroup as InputsGroupStyled,
	Title as TitleStyled,
	Action as ActionStyled,
	ActionArea as ActionsAreaStyled
} from './styles'

const Register = () => {
	const [data, setData] = useState({ genre: 'm' })

	return (
		<FormStyled autoComplete='off' onSubmit={e => {

			e.preventDefault()

			try {

				if (data.password !== data.confirmPassword) {
					throw 'Senhas diferentes!!!'
					document.getElementById('$register_confirmPassowrd$').focus()
				}

				validOrError('genre', data.genre)
				validOrError('email', data.email)
				validOrError('name', data.name)
				validOrError('password', data.password)

				// OK ...

			} catch(e) {

				if (e === null) return toast.error(<Erro />, { autoClose: false })

				typeof e === 'string' && toast.error(e)

			}

		}}>
			<TitleStyled><span className='_title'>Crie sua conta no Maycbook</span> <span className='_subtitle'>Rápido e facil!</span></TitleStyled>
			<InputsGroupStyled>
				<InputAreaStyled style={{ flex: '1', marginRight: '10px' }}>

					<label htmlFor='$register_name$'> nome </label>
					<input 
						id='$register_name$' 
						type='text' 
						minLength='4' maxLength='25' 
						placeholder='Digite seu nome' 
						required
						onChange={ ({ target }) => setData({ ...data, name: target.value }) } />

				</InputAreaStyled>
				<InputAreaStyled>

					<label htmlFor='$register_genre$'> gênero </label>
					<select 
						id='$register_genre$' 
						defaultValue='m' 
						onChange={ ({ target }) => setData({ ...data, genre: target.value }) }>

						<option value='m'> Masculino </option>
						<option value='f'> Feminino </option>

					</select>

				</InputAreaStyled>
			</InputsGroupStyled>
			<InputAreaStyled>

				<label htmlFor='$register_email$'> email </label>
				<input 
					id='$register_email$' 
					type='email' 
					minLength='7' 
					placeholder='digite seu email' 
					required
					onChange={ ({ target }) => setData({ ...data, email: target.value }) } />

			</InputAreaStyled>
			<InputsGroupStyled>
				<InputAreaStyled>

					<label htmlFor='$register_password$'> senha </label>
					<input 
						id='$register_password$' 
						type='password' 
						minLength='3' maxLength='14' 
						placeholder='digite sua senha' 
						required
						onChange={ ({ target }) => setData({ ...data, password: target.value }) } />

				</InputAreaStyled>
				<InputAreaStyled>

					<label htmlFor='$register_confirmPassowrd$'> repita a senha </label>
					<input 
						id='$register_confirmPassowrd$' 
						type='password' 
						minLength='3' maxLength='14' 
						placeholder='confirme a senha' 
						required
						onChange={ ({ target }) => setData({ ...data, confirmPassword: target.value }) } />

				</InputAreaStyled>
			</InputsGroupStyled>
			<ActionsAreaStyled>

				<ActionStyled className='_submit-register' type='submit'>Cadastrar</ActionStyled>
				<ActionStyled className='_already-have' 
					type='button'
					onClick={ () => document.getElementById('$access_email$').focus() }>
					Já tenho uma conta
				</ActionStyled>

			</ActionsAreaStyled>
		</FormStyled>
	)
}

export default Register

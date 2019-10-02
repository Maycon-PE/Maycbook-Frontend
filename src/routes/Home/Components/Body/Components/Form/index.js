import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import payload from '../../../../../../Global/redux/reducers/actions/payload'

import validOrError from '../../../../../../Global/functions/validOrError'
import local from '../../../../../../Global/functions/localStorage'
import Erro from '../../../../../../Global/Components/Erro'

import * as requests from './requests'

import {
	Form as FormStyled,
	InputArea as InputAreaStyled,
	InputsGroup as InputsGroupStyled,
	Title as TitleStyled,
	Action as ActionStyled,
	ActionArea as ActionsAreaStyled
} from './styles'

const initial_state = {
	genre: 'm', image: null
}

const Register = ({ push, success }) => {
	const [data, setData] = useState({ ...initial_state })

	const submit = e => {

			e.preventDefault()

			try {

				if (!data.image) throw 'Selecione uma imagem'

				data.password = data.password.toLowerCase()
				data.confirmPassword = data.confirmPassword.toLowerCase()

				if (data.password !== data.confirmPassword) {
					document.getElementById('$register_confirmPassowrd$').focus()
					throw 'Senhas diferentes!!!'
				}

				validOrError('genre', data.genre)
				validOrError('email', data.email)
				validOrError('name', data.name)
				validOrError('password', data.password)

				data.password = data.password.toLowerCase()

				requests
					.store(data)
					.then(res => {
						toast.success(`${data.email} - criada com sucesso!!!`)
						success(res)
						local.set(res.token)
						toast.success(`${data.email} - criada com sucesso!!!`)

						if (push) push('/maycbook')
						else toast.error('Erro no redirecionamento, tente novamente!')

					}).catch(() => {
						toast.error('Cadastro não realizado :(')
					})

			} catch(e) {

				if (e === null) return toast.error(<Erro />, { autoClose: false })

				typeof e === 'string' && toast.error(e)

			}
	}

	const setImage = ({ target }) => {
		if (target.files[0]) {
			!data.image && setData({ ...data, image: target.files[0] })
		} else {
			data.image && setData({ ...data, image: null })
		}
	}

	const removeImage = () => {
		document.getElementById('file').value = null
		setData({ ...data, image: null })
	}


	return (
		<FormStyled autoComplete='off' onSubmit={ submit }>
			<TitleStyled><span className='_title'>Crie sua conta no Maycbook</span> <span className='_subtitle'>Rápido e facil!</span></TitleStyled>
			<InputsGroupStyled>
				<InputAreaStyled style={{ flex: '1', marginRight: '10px' }}>

					<label htmlFor='file'>escolha uma foto</label>
					<input
						id='file'
						type='file'
						onChange={ setImage } />
					<button type='button' className='set-image' onClick={ () => document.getElementById('file').click() }> { data.image ? data.image.name : 'selecione' }</button>

				</InputAreaStyled>
				<InputAreaStyled>
					<button type='button' className='throw-image' onClick={ removeImage }><i className='fa fa-window-close'></i></button>
				</InputAreaStyled>
			</InputsGroupStyled>
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

const mapDispatchToProps = dispatch => {
  return {
    success: data => {
      dispatch(payload.call(data))
    }
  }
}

const mapStateToProps = state => ({ push: state.push })

export default connect( mapStateToProps, mapDispatchToProps )(Register)

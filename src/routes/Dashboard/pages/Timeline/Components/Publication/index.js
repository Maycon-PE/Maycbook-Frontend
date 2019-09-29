import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import * as requests from './requests'

import {
	Container as ContainerStyled,
	AreaImage as AreaImageStyled,
	AreaText as AreaTextStyled,
	AreaButtons as AreaButtonsStyled
} from './styles'

const initial_state = {
	image: null,
	label: 'Selecionar imagem'
}

const Timeline = ({ push, token }) => {
	const [data, setData] = useState({ ...initial_state })

	useEffect(() => {
		console.log(data)
		if (data.image) {
			if (data.label !== 'Mudar imagem') setData({ ...data, label: 'Mudar imagem' })
		}	else {
			if (data.label !== 'Selecionar imagem') setData({ ...data, label: 'Selecionar imagem' })
		}
	}, [data])

	const send = e => {
		e.preventDefault()

		try {
			const text = document.getElementById('text').value

			if (text.length > 300) throw 'Legenda muito grande'

			if (!text.length) throw 'Sem legenda'

			if (!data.image) throw 'Sem imagem'

			requests
				.send({data: { text, image: data.image }, token })
				.then(() => toast.success('Publicado com sucesso'))
				.catch(() => toast.error('Falha na publicação'))

		} catch (err) {
			toast.warn(typeof err === 'string'? err : 'Erro interno :((')
		}

	}

	const setImage = ({ target }) => {
		setData({ ...data, image: target.files[0] })
	}

	return (
		<ContainerStyled onSubmit={ send }>
			<AreaImageStyled seted={ data.image !== null }>
				<input type='file' id='file' onChange={ setImage } required />
				<button type='button' onClick={ () => document.getElementById('file').click() }>{ data.label }</button>
			</AreaImageStyled>
			<AreaTextStyled>
				<textarea id='text' maxLength='300' required />
			</AreaTextStyled>
			<AreaButtonsStyled>
				<button type='button' className='cancel' onClick={() => {
					document.getElementById('text').value = ''
					setData({ ...initial_state }) 
				}}>Cancelar</button>
				<button type='submit'>Publicar</button>
			</AreaButtonsStyled>
		</ContainerStyled>
	)
}

const mapStateToProps = state => ({ push: state.push, token: state.payload.token})

export default connect(mapStateToProps)(Timeline)
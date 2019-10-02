import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import ImageUploader from 'react-images-upload'

import * as requests from './requests'

import {
	Container as ContainerStyled,
	AreaImage as AreaImageStyled,
	AreaText as AreaTextStyled,
	AreaButtons as AreaButtonsStyled
} from './styles'

const initial_state = {
	image: null,
	selecteds: [],
	label: 'Selecionar imagem'
}

const Timeline = ({ push, token }) => {
	const [data, setData] = useState({ ...initial_state })
	const [req, setReq] = useState(false)

	const send = e => {
		e.preventDefault()

		try {

			if (data.selecteds.length > 1) throw 'Selecione apenas uma imagem'

			const text = document.getElementById('text').value

			if (text.length > 300) throw 'Legenda muito grande'

			if (!text.length) throw 'Sem legenda'

			if (!data.image) throw 'Sem imagem'

			setReq(true)

			requests
				.send({data: { text, image: data.image }, token })
				.then(() => toast.success('Publicado com sucesso'))
				.catch(() => toast.error('Falha na publicação'))
				.finally(() => setReq(false))

		} catch (err) {
			toast.warn(typeof err === 'string'? err : 'Erro interno :((')
		}

	}

	const setImage = file => {	
		setData({ ...data, image: file[0], selecteds: file })
	}

	return (
		<ContainerStyled onSubmit={ send }>
			<AreaImageStyled seted={ data.image !== null }>
				 <ImageUploader
            withPreview={true}
            buttonText='Deixe somente uma imagem'
            fileSizeError='Imagem muito grande'
            fileTypeError='Tipo do arquivo não esperado'
            onChange={setImage}
            imgExtension={['.jpg', '.jpeg']}
            label='Aqui vai sua imagem'
            maxFileSize={5242880}
            singleImage={true}
        	/>
			</AreaImageStyled>
			<AreaTextStyled>
				<textarea id='text' maxLength='300' placeholder='Digite aqui uma legenda' required />
			</AreaTextStyled>
			<AreaButtonsStyled req={req}>
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
import React from 'react'
import { connect } from 'react-redux'

import { baseURL } from '../../../../../../../../Global/api'

import {
	Ul as UlStyled,
	Img as ImgStyled,
	Content as ContentStyled
} from './styles'

const Notifications = ({ payload, responsived, push }) => {

	const target = _id => {
		push && push(`/maycbook/#${_id}`)
	}

	const getMsg = (mode, msg, name ) => {
		switch(mode) {
			case 'like':
				return  `${name} curtiu uma publicação sua`

			case 'comment':
				return msg.length > 60 ? msg.slice(0, 60) + ' ...' : msg

			case 'dislike':
				return `${name} tirou a sua curtida em uma publicação sua`

			default:
				return 'Indefinido'	
		}
	}

	const getAction = mode => {
		switch(mode) {
			case 'like':
				return 'curtiu'

			case 'dislike':
				return 'tirou a curtida'

			case 'comment':
				return 'comentou'	

			default:
				return 'Indefinido'	
		}
	}

	return (<UlStyled responsivided={ responsived }>
		{ payload.documents.user.notifications.map(({ mode, who, image, _id, name, msg, date, post_id }) => {
			return payload.id !== who ? (
				<li key={`item_notification_${_id}`} onClick={ () => target(_id) }>
						<ImgStyled>
							<img 
								src={`${baseURL}/files/uploads/${image}`}
								alt={`Imagem do/da ${name}`} />
						</ImgStyled>
						<ContentStyled>
							<p className='who'>{ name } - { getAction(mode) }</p>
							<p className='msg'>{ getMsg(mode, msg, name) }</p>
							<p className='date'>{ date }</p>
						</ContentStyled>
				</li>
			) : null
		}) }
	</UlStyled>)
}

const mapStateToProps = state => ({ payload: state.payload, responsived: state.responsived, push: state.push })

export default connect(mapStateToProps)(Notifications)

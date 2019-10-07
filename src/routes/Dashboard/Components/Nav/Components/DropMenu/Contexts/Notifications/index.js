import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'

import { baseURL } from '../../../../../../../../Global/api'

import {
	Ul as UlStyled,
	Img as ImgStyled,
	Content as ContentStyled,
	ViewContainer as ViewContainerStyled,
	View as ViewStyled,
	ViewLeft as ViewLeftStyled,
	LViewHeader as LViewHeaderStyled,
	LViewPicture as LViewPictureStyled,
	LViewFooter as LViewFooterStyled,
	ViewRight as ViewRightStyled,
	RViewHeader as RViewHeaderStyled,
	RViewComments as RViewCommentsStyled,
	AreaComments as AreaCommentsStyled
} from './styles'

const initio_view = {
	opened: false,
	ready: false,
	search: {}
}

const Notifications = ({ payload, responsived }) => {

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
		{ payload.documents.user.notifications.map(({ mode, who, image, _id, name, msg, date }) => {
			return payload.id !== who ? (
				<li key={`item_notification_${date}`}>
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

const mapStateToProps = state => ({ payload: state.payload, responsived: state.responsived })

export default connect(mapStateToProps)(Notifications)

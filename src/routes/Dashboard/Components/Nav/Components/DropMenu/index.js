import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'

import Responsive from './Components/Responsived'
import Normal from './Components/Normal'

import Notifications from './Contexts/Notifications'

import {
	Container as ContainerStyled,
	Context as ContextStyled,
	CloseModal as CloseModalStyled
} from './styles'

const initial_context = { notifications: false, dialogues: false, invites: false }

const MsgMenu = ({ responsived }) => {
	const [context, setContext] = useState({ opened: false, body: initial_context })

	const nft = () => setContext({ open: !context.open, body: { ...initial_context, notifications: !context.body.notifications } })

	const cvt = () => setContext({ open: !context.open, body: { ...initial_context, invites: !context.body.invites } })

	const cvs = () => setContext({ open: !context.open, body: { ...initial_context, dialogues: !context.body.dialogues } })

	const renderContext = contextParam => {
		return context.body.notifications ? <Notifications /> : null
	}

	return (
		<Fragment>
			<ContainerStyled responsivided={ responsived }>
				{ responsived ? <Responsive nft={ nft } cvt={ cvt } cvs={ cvs } /> :  <Normal nft={ nft } cvt={ cvt } cvs={ cvs } /> }
				{ context.open && <ContextStyled responsivided={ responsived }>
						{ responsived && <CloseModalStyled onClick={ () => setContext({ open: false, body: { ...initial_context } })}>Fechar</CloseModalStyled> }
						{ renderContext() }
					</ContextStyled>
				}
			</ContainerStyled>			
		</Fragment>
	)
}

const mapStateToProps = state => ({ responsived: state.responsived })

export default connect(mapStateToProps)(MsgMenu)

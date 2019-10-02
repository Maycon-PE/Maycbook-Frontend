import React, { useState, Fragment } from 'react'

import Drops from './Items'

import {
	ClickToggle as ClickToggleStyled
} from './styles'

const Responsive = ({ nft, cvs }) => {
	const [menu, setMenu] = useState(false)

	const toggleMenu = () => setMenu(!menu)

	const functionsInProps = {
		nft, cvs
	}

	return 	(
		<Fragment>
			<ClickToggleStyled menu={ menu } onClick={ toggleMenu }>
				<i className='fa fa-angle-down'></i>
			</ClickToggleStyled>	
			{ menu && <Drops fb={ functionsInProps } /> }
		</Fragment>
	)
}

export default Responsive

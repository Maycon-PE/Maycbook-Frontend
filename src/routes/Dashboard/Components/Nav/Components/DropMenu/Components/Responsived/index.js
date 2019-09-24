import React, { useState, Fragment } from 'react'

import Drops from './Items'

import {
	ClickToggle as ClickToggleStyled
} from './styles'

const Responsive = () => {
	const [menu, setMenu] = useState(false)

	const toggleMenu = () => setMenu(!menu)

	return 	(
		<Fragment>
			<ClickToggleStyled menu={ menu } onClick={ toggleMenu }>
				<i className='fa fa-angle-down'></i>
			</ClickToggleStyled>	
			{ menu && <Drops /> }
		</Fragment>
	)
}

export default Responsive

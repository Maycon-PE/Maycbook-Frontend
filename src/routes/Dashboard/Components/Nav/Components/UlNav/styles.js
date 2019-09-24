import styled from 'styled-components'

import {
	button_styles
} from '../../styles/variables'

export const Ul = styled.ul`
	padding: 0;
	margin: 0 10px;
	height: 100%;

	list-style: none;

	display: flex;
	align-items: center;

	> li {
		min-width: 70px;
		margin: 0 3px;
	}
`

export const Button  = styled.button`
	${ button_styles }
	background: ${({ active }) => active ? '#2e2d2e54' : 'none'};
}
`

export const Profile = styled.img`
  width: 21px;
  border-radius: 50%;
`

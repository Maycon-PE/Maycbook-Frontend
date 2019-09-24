import styled from 'styled-components'

import {
	button_styles
} from '../../styles/variables'

export const Container = styled.div`
	position: relative;
`

export const Input = styled.input`
	padding: 6px 8px;
	margin: 0 10px;
	border-radius: 3px;
	width: 230px;

	${ ({ responsived }) => {
		return responsived && `
			position: absolute;
			top: 40px;
			left: 0;
			padding: 15px;
			background: linear-gradient(to left, rgb(200, 200, 200), white, white, white, rgb(200, 200, 200));
			outline: none;

			:after {
				content: 'asdasd';
				position: absolute;
				height: 100%;
				width: 100%;
				left: 50%;
				top: 50%;
				z-index: 5;
				transform: rotate(45deg);
			}
		`
	}}
`

export const IconSearch = styled.span`
	${ button_styles }
	margin-left: 3px;
	width: 29px;
	overflow: hidden;

	> i {
		margin-right: 7px;
	}

	:hover {
		animation: large .3s forwards linear;

		@keyframes large {
			from {
				width: 29px;
			} 
			to {
				width: 110px;
			}
		}
	}

	${({ active }) => active && `
		background: #2e2d2e54;
		width: 110px;
		:hover {
			animation: null;
		}
		`}
`

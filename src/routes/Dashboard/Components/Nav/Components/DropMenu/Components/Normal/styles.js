import styled from 'styled-components'

export const Ul = styled.ul`
	list-style: none;
	margin: 0;
	display: flex;
	flex-wrap: nowrap;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #222;

	> li:not(:last-child) {
		border-right: 1px solid #222;
	}
`

export const Li = styled.li`
	padding: 2px 8px;
	position: relative;

	:hover > i {
		color: white;
		cursor: pointer;
	}

	${({ qtd }) => qtd && `
		:after {
			content: '+${ qtd }';
			position: absolute;
			top: -5px;
			right: 0px;
			font-size: 10px;
		}
	`}	
`

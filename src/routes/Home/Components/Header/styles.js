import styled from 'styled-components'

export const Container = styled.header`
	grid-area: header;
	border-bottom: 2px solid rgba(0, 0, 0, .6);
	background: linear-gradient(to top, #2851A3, #2851A3, #2851A3, #3578E5);
`

export const Area = styled.div`
	padding-left: 4px;

	height: 100%;
	width: 100%;
	max-width: 1200px;
	margin: auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Logo = styled.div`
	font-size: 2.5em;
	font-weight: 900;
	color: white;
`

export const Access = styled.div`

`

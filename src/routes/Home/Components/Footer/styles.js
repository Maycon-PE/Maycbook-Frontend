import styled from 'styled-components'

export const Container = styled.footer`
	grid-area: footer;

	background: rgba(200, 200, 200, .8);
`

export const Area = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1200px;
	margin: auto;
	padding: 0 5px;
	text-align: center;

	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;

	:hover {
		cursor: default;
	}
`

export const Inc = styled.p`
	opacity: .8;
	width: 100%;
`

export const Desc = styled.p`
	text-indent: 10px;

	> a {
		font-weight: bolder;
	}
`

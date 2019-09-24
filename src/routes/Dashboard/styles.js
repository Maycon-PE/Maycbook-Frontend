import styled from 'styled-components'

const background = 'linear-gradient(120deg, rgb(200, 200, 200), white, white, white, rgb(200, 200, 200))'

export const Loading = styled.div`
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background: ${ background } ;
`

export const Container = styled.div`
	height: 100vh;
	background: ${ background };

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr;
	grid-template-areas:
	'nav'
	'content';
`

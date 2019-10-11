import styled from 'styled-components'

const background = '#c2c2c2'

export const Loading = styled.div`
	min-height: 100vh;
	height: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background: ${ background } ;
`

export const Container = styled.div`
	min-height: 100vh;
	height: 100%;
	background: ${ background };

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr;
	grid-template-areas:
	'nav'
	'content';
`

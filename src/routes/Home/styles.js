import styled from 'styled-components'

export const Container = styled.div`
	height: 100vh;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 100px 1fr 150px;
	grid-template-areas:
		'header'
		'body'
		'footer';


	@media (max-width: 600px)	 {
		grid-template-rows: 180px 1fr 200px;
	}
`

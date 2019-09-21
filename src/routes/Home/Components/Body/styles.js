import styled from 'styled-components'

export const Container = styled.div`
	grid-area: body;
	z-index: 5;

	background: rgb(30, 176, 165);
	box-shadow: -5px 9px 14px 4px rgb(30,176,165);
`

export const Area = styled.main`
	position: relative;

	height: 100%;
	width: 100%;
	max-width: 1200px;
	margin: auto;
	padding: 4px;

	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1180px) {
		justify-content: center;
	}
`

export const Img = styled.div`
	> img {
		opacity: .8;
		width: 100%;
		max-width: 700px;
		border-radius: 10px;
		border: 4px solid rgba(30, 176, 165, .4);
		overflow: hidden;
	}
`
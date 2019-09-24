import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 5px;
	${({ responsivided }) => responsivided && 'width: 20px;'}
	height: 31px;
	position: relative;
`


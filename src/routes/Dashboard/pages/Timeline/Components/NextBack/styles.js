import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 0 20px;

	> button {
		padding: 4px 15px;
		border-radius: 10px;
	}

	.back {
		background: yellow;
	}

	.next {
		background: green;
	}
`

export const Button = styled.button`
	${ ({ v }) => v && `
		pointer-events: none;
		opaticy: .5;
	` }
`

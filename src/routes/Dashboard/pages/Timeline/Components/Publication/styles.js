import styled from 'styled-components'

export const Container = styled.form`
	border: 1px solid black;
	width: 100%;
	max-width: 500px;
	position: relative;
  padding: 10px;
	border-radius: 10px;
	background: linear-gradient(to top,#2851A3,#2851A3,#2851A3,#3578E5)

`
export const AreaImage = styled.div`
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #222;

	> input {
		display: none;
	}

	> button {
		padding: 10px;
		background: ${({ seted }) => seted ? 'black' : 'gray'};
		color: white;
		border-radius: 5px;
	}

`

export const AreaText = styled.div`
	> textarea {
		border: none;
		background: white;
		padding: 20px;
		font-size: 20px;
		width: 100%;
		max-height: 400px;
		border-radius: 5px;
	}
`

export const AreaButtons = styled.footer`
	pointer-events: ${({ req }) => req ? 'none' : 'painted'};
	display: flex;
	justify-content: space-around;

	> button {
		padding: 8px;
		border-radius: 5px;
		border: none;
		opacity: .8;

		:hover {
			opacity: 1;
		}
	}

	.cancel {
		background: rgba(200, 50, 50, .8);
	}

	>button[type=submit] {
		background: rgba(50, 200, 50, .8);

		:hover {
			cursor: ${({ req }) => req ? 'wait' : 'pointer'};
		}
	}

`

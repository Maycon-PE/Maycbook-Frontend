import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-end;
	justify-content: center;
`

export const AllInputsGroup = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
`

export const InputGroup = styled.div`
	margin: 0 5px;
	position: relative;

	display: flex;
	flex-flow: column wrap;

	> input {
		margin: 4px 0;
		padding: 4px;
		display: block;
		border-radius: 4px;

		width: 100%;
		max-width: 210px;

		background: rgba(255, 255, 255, .7);
	}

	> label {
		color: white;
		font-size: 1.2em;
	}
`

export const Submit = styled.button`
	margin: 5px;
	border-radius: 4px;
	padding: 3px 6px;
	background: rgba(0, 0, 0, .5);
	color: white;
	border: 1px solid white;

	transition: all .1s linear;
	:hover {
		background: green;
		color: white;
		border: 1px solid white;		
	}
`

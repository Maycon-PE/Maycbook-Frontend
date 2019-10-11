import styled from 'styled-components'

export const ClickToggle = styled.nav`
	width: 30px;
	height: 43px;
	border-radius: 8px;

	display: flex;
	justify-content: center;

	transition: background .2s ease-out;
	:hover {
		cursor: pointer;
		background: #2e2d2e54;
	}

	> i {
		color: white;
		position: absolute;
		animation: move 1s infinite linear;
		animation-dalay: 1s;

		@keyframes move {
			0%, 100% {
				top: 20%;
			}
			50% {
				top: 40%;
			}
		}
	}
`
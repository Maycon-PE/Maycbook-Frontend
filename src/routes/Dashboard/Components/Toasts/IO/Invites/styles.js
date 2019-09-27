import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
`

export const Img = styled.div`
	width: 70px;
	height: 65px;
	margin-right: 10px;

	> img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
`

export const Actions = styled.div`
	> p {
		text-align: center;
	}

	> span {
		font-size: 13px;
		text-align: center;
	}

	> div {
		display: flex;
		justify-content: space-around;

		.accept, .recuse {
			padding: 4px 8px;
			border-radius: 10px;
			text-transform: uppercase;
			font-weight: bold;
			border: 1px solid transparent;
			color: white;
			border-top: 1px solid #222;
		  border-left: 1px solid #222;
		  margin: 0px 8px;

			:hover {
				border: 1px solid transparent;
				border-bottom: 1px solid #222;
				border-right: 1px solid #222;
			}
		}

		.recuse {
			background: linear-gradient(90deg, rgba(200, 0, 0, .7), rgba(200, 0, 0, .7), rgb(200, 0, 0), rgba(200, 0, 0, .7), rgba(200, 0, 0, .7));
		}

		.accept {
			background: linear-gradient(90deg, rgba(100, 100, 150, .7), rgba(100, 100, 150, .7), rgb(100, 100, 150), rgba(100, 100, 150, .7), rgba(100, 100, 150, .7));
		}
	}
`

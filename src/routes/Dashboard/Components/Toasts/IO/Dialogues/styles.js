import styled from 'styled-components'

export const Container = styled.div`
	display: flex;

	.content {
		.who {
			text-align: right;
			position: relative;

			> img {
				position: absolute;
				left: 2px;
				top: -15px;
				width: 39px;
				height: 35px;
				border-radius: 50%;
			}
		}

		.msg {
			max-height: 100px;
			text-indent: 10px;
			background: white;
			border: 1px solid #222;
			color: black;
			border-radius: 10px;
			overflow-y: scroll;
		}

		> button {
			background: gold;
		  padding: 5px 10px;
		  border-radius: 10px;
		  border: 1px solid transparent;
		  border-top: 1px solid #222;
		  border-left: 1px solid #222;
		  margin-right: 10px;

		  :hover {
		  	border: 1px solid transparent;
		  	border-bottom: 1px solid #222;
		  	border-right: 1px solid #222;
		  }
		}

		.data {
			font-size: 13px;
		}
	}
`


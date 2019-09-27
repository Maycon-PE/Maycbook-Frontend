import styled from 'styled-components'

export const Ul = styled.ul`
	margin: 0;
	${({ responsivided }) => {
		return responsivided ? `
			padding: 50px;
			height: 100%;
			background: rgba(0, 0, 0, .5);
		` : `
			padding: 20px 0; 
			max-height: 400px;
		`
	}}

	overflow-y: scroll;

 > li {
 	position: relative;
 	display: flex;
 	height: 80px;
 	margin: 5px 0;
 	padding: 5px;
 	border-radius: 5px;
 	border: 1px solid transparent;
 	overflow: hidden;
 	background: rgba(250, 250, 250, .8);

 	transition: all .2s ease-in;

 	:hover {
 		cursor: help;
		background: rgb(250, 250, 250); 		

 		border: 1px solid black;
 		z-index: 5;
 	}
 } 

 > li:not(:last-child) {
 	border-bottom: 1px solid #222;
 }
`

export const Img = styled.div`
	width: 93px;
	display: flex;
	align-items: center;

	> img {
		width: 100%;
		border-radius: 50%;
	} 

`

export const Content = styled.div`
	flex: 1;
	padding: 0 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	> p {
		text-align: center;
		padding: 0;
		margin: 0;
	}
	.who, .date, .msg {
		font-size: 13px;
	}

	.msg {
		padding: 2px;
		border-bottom: 1px solid #222;
	}

`

import styled from 'styled-components'

import { modal } from '../../styles/variables'

export const Ul = styled.ul`
	${({ responsivided }) => {
		return responsivided ? `
			margin: 0;
			padding: 50px;
			height: 100%;
			background: rgba(0, 0, 0, .5);
		` : `
			margin: 20px 0; 
			padding: 0;
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
		width: 55px;
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

export const ViewContainer = styled.div`
	${ modal }
`

export const View = styled.article`
	width: 100%;
  max-width: 850px;
  max-height: 90vh;
  border: 1px solid #ff0e0e;
  padding: 10px;
  background: azure;
  border-radius: 10px;
  position: relative;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`

export const ViewLeft = styled.div`
	color: black;
	display: flex;
	flex-flow: row wrap;
	position: relative;
	width: 100%;
	max-width: 350px;
`

export const LViewHeader = styled.header`
	display: flex;
  justify-content: space-between;
  height: 79px;
  background: linear-gradient(to bottom, #111, #333, transparent);
  padding: 0 5px;
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  font-size: 13px;
  color: white;
`

export const LViewPicture = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;	

	> img {
		width: 100%;
		max-width: 300px;
		margin: 100px 0;
	}

	> .desc {
		opacity: 0;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 30px;
		width: 100%;
		background: linear-gradient(to top, #222, #222, transparent, transparent);
		transition: opacity .2s ease-in;
		color: white;
		display: flex;
		align-items: flex-end;
		padding-bottom: 10px;

		> p {
			text-indent: 10px;
			max-height: 100px;
			overflow-y: scroll;
		}
	}

	:hover {
		> .desc {
			opacity: 1;
		}
	}
`

export const LViewFooter = styled.footer`
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	height: 30px;
	background: #222;
	display: flex;
	justify-content: space-around;

	> button, a {
		font-size: 20px;
		color: white;
		font-weight: bolder;
		background: transparent;
		border: none;
	}
`
export const ViewRight = styled.div`
	position: relative;
	height: 100%;
	padding-left: 5px;
	flex: 1;
	display: flex;
	flex-direction: column;
`

export const RViewHeader = styled.header`
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	border-bottom: 1px solid black;

	> img {
		width: 60px;
		border-radius: 50%;
	}

	.author {
		flex: 1;
		text-align: center;
		font-size: 20px;
	}

	> button {
		position: absolute;
		top: 0;
		right: 0;
		padding: 5px;
		border-radius: 5px;
		color: white;
		font-weight: bolder;
		background: linear-gradient(45deg, #b36666, #ed1010);

		border-bottom: 1px solid black;
		border-right: 1px solid black;

		:hover {
			background: #ed1010;
			border: none;
			border-top: 1px solid black;
			border-left: 1px solid black;
		}
	}
`

export const RViewComments = styled.div`
	flex: 1;
	height: 100%;
	max-height: 80vh;
	overflow-y: scroll;

	> ul {
		padding: 10px 0;
		margin: 0;

		> li:not(:first-child) {
			margin-top: 10px;
		}

		> li:not(:last-child) {
			border-bottom: 1px solid #444;
		}

		> li {
			position: relative;
			text-align: right;

			.header {
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				> img {
					width: 40px;
					margin: 6px;
					border-radius: 50%;
				}

				.date {
					font-size: 13px;
				}
			}
		}

	}
`

export const AreaComments = styled.textarea`
	border: none;
  background: none;
  width: 100%;
  padding: 5px;
`

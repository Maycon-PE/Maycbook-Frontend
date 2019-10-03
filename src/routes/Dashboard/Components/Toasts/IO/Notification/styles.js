import styled from 'styled-components'

export const Container = styled.div`
	color: black;
	padding: 10px 0 20px 0;
`

export const Area = styled.div`
	display: flex;
	flex-direction: row-reverse;
`

export const Img = styled.div`
	width: 70px;
	height: 65px;
	position: sticky;
	top: 0;

	> img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	:after {
		content: '';
		width: 10px;
		height: 10px;
		transform: rotate(45deg);
		position: absolute;
		top: 21px;
		background: white;
		left: 74px;
		border-bottom: 1px solid #222;
		border-left: 1px solid #222;
	}
`

export const Msg = styled.div`
	flex: 1;
	margin-left: 10px;
	padding-left: 10px;
	border: 1px solid #222;
	border-radius: 8px;
	background: white;
	position: relative;
	max-height: 100px;
	overflow-y: scroll;
	margin-bottom: 10px;

	> p {
		font-size: 12px;
		text-indent: 10px;
		width: 100%;
	}
`

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;

	.date, .name {
		position: absolute;
		font-size: 14px;
	}

	.date {
		right: 2px;
		bottom: 0;
	}

	.name {
		left: 0;
		bottom: 10px;
	}
`


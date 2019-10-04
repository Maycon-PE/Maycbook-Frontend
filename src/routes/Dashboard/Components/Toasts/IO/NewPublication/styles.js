import styled from 'styled-components'

export const Area = styled.div`
	display: flex;
  flex-direction: column;
  position: relative;
`

export const Img = styled.div`
	position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid;
  margin-top: 5px;

  > img {
  	width: 100%;
  	box-shadow: 0px 0px 30px lightyellow;
  }

`

export const Msg = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;

  > img {
  	width: 55px;
  	border-radius: 10px;
  }

  > p {
  	margin-bottom: 0;
  }
`

export const Footer = styled.div`
	text-align: center;
`

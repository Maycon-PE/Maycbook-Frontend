import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 5px;
	${({ responsivided }) => responsivided && 'width: 20px;'}
	height: 31px;
	position: relative;
`

export const Context = styled.div`
  border: 1px solid black;
  ${({ responsivided }) => {
    return responsivided ? `
      border: 1px solid black;
      position: fixed;
      width: 100%;
      height: 100vh;
      left: 0;
      top: 0;
    ` : `
      position: absolute;
      right: 0;
      background: rgb(200, 200, 200);
      padding: 2px;
      border-radius: 10px;
      top: 39px;
      width: 400px;

      :after {
        content: '';
        position: absolute;
        height: 15px;
        width: 15px;
        top: -8px;
        right: 76px;
        transform: rotate(45deg);
        background: rgb(200, 200, 200);
        border-top: 1px solid black;
        border-left: 1px solid black;
      }
    `
  }}
  
`

export const CloseModal = styled.button`
    padding: 10px;
    position: fixed;
    right: 48px;
    top: 10px;
    border-radius: 10px;
    color: white;
    background: rgba(100, 149, 237, .7);

    :hover {
      font-weight: bolder;
      background: rgb(100, 149, 237);
      z-index: 10;
    }
`


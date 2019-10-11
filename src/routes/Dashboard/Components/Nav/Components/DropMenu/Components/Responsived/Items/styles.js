import styled from 'styled-components'

export const Ul = styled.ul`
	position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  right: 0;
  opacity: 0;
  z-index: 999;
  
  border: 1px solid rgba(0, 0, 0, .4);
  background: white;
  padding: 5px 20px 5px 5px;

  :after {
  	content: '';
    position: absolute;
    height: 11px;
    width: 11px;
    top: -6px;
    background: white;
    right: 8px;
    transform: rotate(45deg);
  }

  > li:not(:last-child) {
  	border-bottom: 1px solid rgba(0, 0, 0, .5);
  }

  animation: showwing .5s linear;
  animation-fill-mode: forwards;
  
  @keyframes showwing {
  	0% {
  		top: -100%;
  	}
  	100% {
  		top: 24px;
  		opacity: 1;
  	}	
  }
`

export const Li = styled.li`
  padding: 0 10px;
  margin: 1px;
  position: relative;

  transition: background .4s ease-out;
  :hover {
    cursor: pointer;
    background: #555;
    color: white;
  }

  ${({ qtd }) => qtd && `
    :after {
      content: '${ qtd }';
      position: absolute;
      right: -18px;
      padding: 2px;
      border-radius: 50%;
      background: #222;
      color: white;
      font-size: 11px;
    }
  `}
`

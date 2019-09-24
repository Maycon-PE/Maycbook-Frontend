import styled from 'styled-components'

export const Ul = styled.ul`
	position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  right: 0;
  opacity: 0;
  padding: 0;
  
  border: 1px solid rgba(0, 0, 0, .4);
  background: white;
  padding: 5px;

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

  > li {
  	padding: 0 5px;
  	margin: 1px;

  	:hover {
  		cursor: pointer;
  	}
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

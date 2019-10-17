import styled from 'styled-components'

export const Container = styled.div`
	border: 1px solid red;
  height: 100vh;
  max-height: 100vh;
  background: rgba(197, 16, 200, 0.68);
  display: flex;
  justify-content: center;
  padding: 10px;
  position: relative;
`

export const Area = styled.div`
	color: black;
	width: 100%;
	max-width: 1000px;
	overflow: hidden;;
  display: flex;
  flex-flow: row wrap;
  background: #f0f8ffbf;
`

export const Left = styled.div`
	color: black;
	display: flex;
  align-items: center;
  padding: 5px;
`

export const LeftImg = styled.div`
	color: black;

	> img {
		border-radius: 5px;
		box-shadow: 0px 0px 6px 2px black;
	}
`

export const Right = styled.div`
	color: black;
	display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 53%;
`

export const RightHeader = styled.header`
	color: black;
	width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Profile = styled.div`
	color: black;
	display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  > img {
  	width: 55px;
    border-radius: 10px;
    margin-right: 10px;
    box-shadow: 0px 0px 4px 2px #0400e9;
  }
`

export const Description = styled.div`
	color: black;
	padding: 10px;

	> p {
		text-align: center;
	}
`

export const Actions = styled.div`
	color: black;
	display: flex;
  justify-content: space-around;

  > button {
  	padding: 5px;
  	border-radius: 10px;
  }

  .action_like {
  	background: green;
  }

  .action_comment {
  	background: black;
  	color: white;
  }
`


export const RightBody = styled.div`
	color: black;
  max-height: 60vh;
  overflow-y: scroll;
  position: relative;
`

export const DoComment = styled.form`
  margin-bottom: 5px;
  position: sticky;
  top: 0px;
  background: linear-gradient(to top, transparent, #343333, #212121ad);
  padding: 0 5px;

  > textarea {
    border-radius: 10px;
    border: none;
    width: 100%;
    padding: 10px;
    margin: 4px 0;
  }
`

export const DoCommentActions = styled.div`
  display: flex;
  justify-content: space-around;

  > button {
    padding: 10px;
    border-radius: 5px
    margin: 0 5px;
  }

  .btn_cancel {
    background: red;
  }

  > button[type=submit] {
    background: green;
  }
`

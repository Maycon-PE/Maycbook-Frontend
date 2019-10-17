import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  max-height: 200px;
  margin: 10px 2px;
  background: steelblue;
  border-radius: 10px;
`
export const Img = styled.div`
  position: sticky;
  top: 0;

  > img {
    width: 55px;
    margin: 10px;
    border-radius: 10px;
  }
`

export const Name = styled.header`
	padding: 2px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3px;
  border-bottom: 1px solid #443;

`

export const Msg = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow-y: scroll;
  position: relative;

  > p {
    text-indent: 10px;
    padding-right: 10px;
  }
`

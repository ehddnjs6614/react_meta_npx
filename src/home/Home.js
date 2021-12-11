import { Button } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components'

const StyledDeleteButton = styled.button`
  color: ${props => (props.user.username === '기모찌' ? 'blue' : 'red')};
`
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${props => (props.user.username === '기모찌' ? 'blue' : 'red')};
  background-color: green;
`

const Home = props => {
  //구조 분할 할당
  const { boards, setBoards, setNumber, number, user } = props

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <h1>{number}</h1>
      <StyledAddButton user={user} onClick={() => setNumber([number + 1])}>
        번호증가
      </StyledAddButton>

      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>

      {boards.map(i => (
        <h1 key={i.id}>
          제목 : {i.title} 내용 : {i.content}
        </h1>
      ))}
    </div>
  )
}

export default Home

import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${props => props.backgroundColor};
`
//링크 객체 임포트 후 사용 (Link) 상속 ,
const StyledHeadLink = styled(Link)`
  color: red;
`

const Header = () => {
  return (
    <div>
      <StyledHeaderDiv backgroundColor="blue">
        <ul>
          <li>
            <StyledHeadLink to="/"> 홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/Login/10"> 로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaderDiv>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Login/10">
              Login
            </Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

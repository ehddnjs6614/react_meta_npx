import React from 'react'
import styled from 'styled-components'

const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`

const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>오시는길 : 서울 강남구...</li>
        <li>전화번호 : 01001023</li>
      </ul>
    </StyledFooterDiv>
  )
}

export default Footer

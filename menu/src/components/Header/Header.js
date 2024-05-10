import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
  /*position: fixed;*/
  width: 100%;
  h1 {
    margin: 0 auto;
    text-align: center;
  }
  
  
`
const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  justify-content: space-evenly;
  background: ${props => props.theme.header.backgroundColor};  
  top: 0;  
  color: black;
`
const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${props => props.theme.header.color};  
`

const StyledImage = styled.img`
  height: 75px;
  width: 75px;
`

const Header = ({ siteTitle }) => (
  <StyledContainer>
    <StyledHeader>
      <StyledLink to="/">Food and Drink Menu</StyledLink>  
      <StyledLink to="/bookreviews">Book Reviews</StyledLink>  
      <StyledLink to="/bookreleases">Upcoming Releases</StyledLink>  
    </StyledHeader>
  </StyledContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTile: ""
}

export {Header}

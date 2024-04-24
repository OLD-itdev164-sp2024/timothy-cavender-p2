import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/read-and-mead.jpg"
import styled from "styled-components"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  justify-content: space-evenly;
  background: ${props => props.theme.header.backgroundColor};
  position: fixed;
  top: 0;
  width: 100%;
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
  <StyledHeader>
    <h2>Welcome To The Read And Mead!</h2>
    <StyledLink to="/"><StyledImage src={logo} /></StyledLink>  
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTile: ""
}

export default Header

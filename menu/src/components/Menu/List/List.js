import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//import {MenuContainer} from '../MenuContainer/MenuContainer'

const StyledList = styled.ul `
    color: rgba(122,4,6);
    margin: 0;
    border: 1px solid black;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    h1 {
        border-bottom: 1px solid black;
    }
    p{
        color: white;
        font-family: "Lucida Handwriting", cursive;
    }
`

export const List = ({children, ...rest}) => (
    <StyledList>{children}</StyledList>
    
)

List.propTypes = {
    children: PropTypes.node.isRequired
}
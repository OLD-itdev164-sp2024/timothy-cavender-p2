import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//import {MenuContainer} from '../MenuContainer/MenuContainer'

const StyledList = styled.ul `
    color: black;
    margin: 0;
    border: 1px solid black;
    width: 100%;
    h1 {
        border-bottom: 1px solid black;
    }
`

export const List = ({children, ...rest}) => (
    <StyledList>{children}</StyledList>
    
)

List.propTypes = {
    children: PropTypes.node.isRequired
}
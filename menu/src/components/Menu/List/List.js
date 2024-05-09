import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {MenuContainer} from '../MenuContainer/MenuContainer'

const StyledList = styled.ul `
    flex: auto;
    flex-direction: column;
    color: red;
`

export const List = ({children, ...rest}) => (
    <MenuContainer>
        <StyledList>{children}</StyledList>
    </MenuContainer>
    
)

List.propTypes = {
    children: PropTypes.node.isRequired
}
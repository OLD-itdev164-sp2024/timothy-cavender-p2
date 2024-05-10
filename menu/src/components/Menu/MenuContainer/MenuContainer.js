import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(252,209,34,.50);
    
    h1 {
        text-align: center;
    }
`

export const MenuContainer = ({children, ...rest}) => (
    <StyledMenuContainer>{children}</StyledMenuContainer>
)

MenuContainer.propTypes = {
    children: PropTypes.node.isRequired
}
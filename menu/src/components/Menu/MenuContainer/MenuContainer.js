import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMenuContainer = styled.div`
    border: 1px solid black;
`

export const MenuContainer = ({children, ...rest}) => (
    <StyledMenuContainer>{children}</StyledMenuContainer>
)

MenuContainer.propTypes = {
    children: PropTypes.node.isRequired
}
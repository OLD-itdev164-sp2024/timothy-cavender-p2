import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
    text-align: center;
    h1 {
        color: red
    };
`

export const BookContainer = ({children,...rest}) => (
    <StyledContainer>{children}</StyledContainer>
)

BookContainer.propTypes = {
    children: PropTypes.node.isRequired
}


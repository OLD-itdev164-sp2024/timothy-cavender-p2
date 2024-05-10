import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledListItem = styled.li `
    color: green;
    list-style: none;
    padding-left: 1em;
    padding-right: 1em;
    div {
        display: flex;
        justify-content: left;
    }
    #price {
        margin-left: 2em;
    }
`
export const ListItem = ({children, ...rest}) => (
    <StyledListItem>{children}</StyledListItem>
)

ListItem.propTypes = {
    children: PropTypes.node.isRequired
}
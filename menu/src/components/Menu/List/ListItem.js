import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
//import {BaseContainer} from '../BaseContainer'

const StyledListItem = styled.li `
    color: green;
    list-style: none;
`
export const ListItem = ({children, ...rest}) => (
    <StyledListItem>{children}</StyledListItem>
)

ListItem.propTypes = {
    children: PropTypes.node.isRequired
}
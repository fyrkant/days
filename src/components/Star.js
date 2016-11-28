import React from 'react'
import styled from 'styled-components'

var Star = styled.span`
  position: absolute;
  left: ${props => props.pos.x}px;
  top: ${props => props.pos.y}px;
`

export default props => (
  <Star
    pos={{x: props.x, y: props.y}}
    className={'f1 ' + (props.isYours ? 'gold o-70' : 'white-70')}
    >
    *
  </Star>
)

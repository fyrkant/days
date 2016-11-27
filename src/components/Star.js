import React from 'react'

export default props => (
  <span className={'f1 ' + (props.isYours ? 'gold o-70' : 'white-70')} style={{position: 'absolute', left: props.x, top: props.y}}>*</span>
)

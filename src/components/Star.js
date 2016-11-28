import React, {Component} from 'react'

export default class Star extends Component {
  render () {
    return (
      <span
        className={'f1 ' + (this.props.isYours ? 'gold o-70' : 'white-70')}
        style={{position: 'absolute', left: this.props.x, top: this.props.y}}>*</span>
    )
  }
}

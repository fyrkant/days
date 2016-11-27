import React, {Component} from 'react'
import Star from './Star'

export default class Sky extends Component {
  render () {
    const {innerWidth, innerHeight} = this.props.windowSize && this.props.windowSize
    return (
      <span>
        {this.props.stars.map(s => {
          const realX = Math.round((s.x * innerWidth) / 100)
          const realY = Math.round((s.y * innerHeight) / 100)

          return <Star key={s.key} x={realX} y={realY} />
        })}
      </span>
    )
  }
}

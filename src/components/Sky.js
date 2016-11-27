import React, {Component} from 'react'
import Star from './Star'
import map from 'lodash/map'

export default class Sky extends Component {
  render () {
    const {innerWidth, innerHeight} = this.props.windowSize && this.props.windowSize
    const createStar = (star, key) =>
      <Star key={key} x={Math.round((star.x * innerWidth) / 100)} y={Math.round((star.y * innerHeight) / 100)} />
    return (
      <span>
        {map(this.props.stars, createStar)}
      </span>
    )
  }
}

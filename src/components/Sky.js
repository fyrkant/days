import React, {Component} from 'react'
import Star from './Star'
import map from 'lodash/map'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Sky extends Component {
  render () {
    const {innerWidth, innerHeight} = this.props.windowSize && this.props.windowSize
    const createStar = (star, key) =>
      <Star key={key} isYours={this.props.currentUser === star.uid} x={Math.round((star.x * innerWidth) / 100)} y={Math.round((star.y * innerHeight) / 100)} />
    return (
      <ReactCSSTransitionGroup
        transitionName='star'
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={300}>
        {
          this.props.stars && map(this.props.stars, createStar)
        }
      </ReactCSSTransitionGroup>
    )
  }
}

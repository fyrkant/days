import React, {Component} from 'react'
import Star from './Star'
import map from 'lodash/map'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Sky extends Component {
  render () {
    const {innerWidth, innerHeight} = this.props.windowSize && this.props.windowSize
    const createStar = (data, index) => {
      return (
        <Star
          key={data.key}
          isYours={this.props.currentUser === data.star.uid}
          index={index}
          x={Math.round((data.star.x * innerWidth) / 100)}
          y={Math.round((data.star.y * innerHeight) / 100)}
        />
      )
    }
    const stars = map(this.props.stars, (star, key) => ({star, key}))
                    .map(createStar)
    return (
      <ReactCSSTransitionGroup
        transitionName='star'
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={300}>
        {
          this.props.stars && stars
        }
      </ReactCSSTransitionGroup>
    )
  }
}

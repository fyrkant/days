import React from 'react'
import moment from 'moment'
import Sky from './components/Sky'

export default class App extends React.Component {
  constructor (props) {
    super()

    this.state = {
      stars: [],
      windowSize: {
        innerWidth: 1,
        innerHeight: 1
      }
    }
  }
  calculatePercentPosition (page, win) {
    return page / win * 100
  }
  addStar (e) {
    const {innerWidth, innerHeight} = window
    const {pageX, pageY} = e
    const posX = this.calculatePercentPosition(pageX, innerWidth)
    const posY = this.calculatePercentPosition(pageY, innerHeight)

    const newStar = {x: posX, y: posY, key: new Date().getTime()}

    this.props.db.ref('stars')
      .push(newStar)
      .then(p => console.log(p))
    // this.setState({stars: this.state.stars.concat(newStar)})
  }
  recalcSize () {
    const {innerWidth, innerHeight} = window
    this.setState({windowSize: {innerWidth, innerHeight}})
  }
  componentDidMount () {
    this.props.db.ref('stars').on('value', (snapshot) => {
      console.log(snapshot.val())
      this.setState({stars: snapshot.val()})
    })
    this.recalcSize()
    window.addEventListener('resize', _ => this.recalcSize())
  }
  render () {
    return (
      <article className='baskerville' onTouchStart={e => this.addStar(e.changedTouches[0])} onClick={e => this.addStar(e)}>
        <div className='vh-100 dt w-100 tc bg-black white cover' >
          <Sky stars={this.state.stars} windowSize={this.state.windowSize} />
          <div className='dtc v-mid'>
            <h1 className='f1 f-headline-l tracked-tight fw1 white-60'>It's been {moment().diff('20140712', 'days')} days</h1>
            <blockquote className='ph0 mh0 measure f2 center'>
              <p className='fw2 white-70'>
                And I still think of you all the time
              </p>
            </blockquote>
          </div>
        </div>
      </article>
    )
  }
}

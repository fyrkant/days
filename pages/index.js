import React from 'react'
import Head from 'next/head'
import moment from 'moment'

export default class App extends React.Component {
  constructor (props) {
    super()

    this.state = {stars: []}
  }
  showStar ({pageX, pageY}) {
    const newStar = {x: pageX, y: pageY, key: new Date().getTime()}
    this.setState({stars: this.state.stars.concat(newStar)})
  }
  componentDidMount () {
    window.addEventListener('resize', _ => this.setState({stars: []}))
  }
  render () {
    return (
      <article className='baskerville' onTouchStart={e => this.showStar(e.changedTouches[0])} onClick={e => this.showStar(e)}>
        <Head>
          <title>Days since.</title>
          <link rel='stylesheet' href='https://unpkg.com/tachyons@4.5.5/css/tachyons.min.css' />
        </Head>
        <div className='vh-100 dt w-100 tc bg-black white cover' >
          {this.state.stars.map(s => <span className='f1 white-70' key={s.key} style={{position: 'absolute', left: s.x, top: s.y}}>*</span>)}
          <div className='dtc v-mid'>
            <h1 className='f1 f-headline-l fw1 white-60'>It's been {moment().diff('20140712', 'days')} days</h1>
            <blockquote className='ph0 mh0 measure f4 center'>
              <p className='fw2 ttu white-70'>
                And I still think of you all the time
              </p>
            </blockquote>
          </div>
        </div>
      </article>
    )
  }
}

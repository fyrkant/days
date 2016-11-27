import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyC-gJRJMGuG5nK09YUzG4KX-2DMtWr1fJo',
  databaseURL: 'https://days-a67af.firebaseio.com'
}

firebase.initializeApp(config)

const db = firebase.database()

ReactDOM.render(
  <App db={db} />,
  document.getElementById('root')
)

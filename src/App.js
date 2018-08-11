import React, { Component } from 'react'
import logo from './logo.svg'
import Example from './example/Example'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React Setup</h1>
        </header>
        <Example />
      </div>
    )
  }
}

export default App

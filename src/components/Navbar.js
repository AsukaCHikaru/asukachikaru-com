import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className='content-wrapper'>
          <a href='/'>Asuka 'asukachikaru' Wang</a>
          {/* <div> */}
            <a href='#portfolio'>Portfolio</a>
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
            <a href='' target='_blank' rel='noreferrer'>Resume</a>
          {/* </div> */}
        </div>
      </nav>
    )
  }
}

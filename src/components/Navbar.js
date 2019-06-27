import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/pro-light-svg-icons';

import { navLaStr } from '../constants/meta';

export default class Navbar extends Component {
  handleClick = (target) => {
    const targetY = document.querySelector(`#${target}`).offsetTop;    
    // window.history.pushState({}, 'title', `/#${target}`);
    window.scrollTo({
      top: targetY,
      left: 0,
      behavior: 'smooth'
    });
  }
  renderLaList = () => {
    let laList = [];
    for (const key in navLaStr) {
      if (navLaStr.hasOwnProperty(key)) {
        const la = navLaStr[key];
        laList.push({key, string: la});
      }
    }
    const node = laList.map((la, i) => 
      <button 
        key={`opt-la-${i}`}
        className={(this.props.la===la.key) ? 'curr' : ''}
        onClick={() => this.props.changeLa(la.key)}
      >{la.string}</button>
    );
    return node;
  }
  
  render() {
    return (
      <nav className="navbar">
        <div className='content-wrapper'>
          <a href='/' className='title'>Asuka 'asukachikaru' Wang</a>
          <div className='nav-btn'>
            <button
              className={this.props.currSec==='portfolio' ? 'curr' : ''} 
              onClick={() => this.handleClick('portfolio')}
            >portfolio</button>
            <button
              className={this.props.currSec==='about' ? 'curr' : ''} 
              onClick={() => this.handleClick('about')}
            >about</button>
            <button 
              className={this.props.currSec==='contact' ? 'curr' : ''} 
              onClick={() => this.handleClick('contact')}
            >contact</button>
          </div>
          <div className='resume'>
            <a href='https://drive.google.com/file/d/16fU5vRsJIjSC2Rj6DmrsdPbJ8NtizD_x/view?usp=sharing' target='_blank' rel='noopener noreferrer'
            >resume</a>
          </div>
          <div className='opt'>
            <div className='la'>
              {this.renderLaList()}
            </div>
            <button className='darkMode' onClick={() => this.props.changeDarkMode()}><FontAwesomeIcon icon={(this.props.dark) ? faSun : faMoon} /></button>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.defaultProps = {
  la: 'en'
}

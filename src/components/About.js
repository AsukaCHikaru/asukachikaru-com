import React, { Component } from 'react'

import { ABOUT } from '../constants/about';

import '../styles/About.css';

export default class About extends Component {
  renderItems = (list, la) => {
    if(list.hasOwnProperty(la)){
      return list[la].map((item, i) => 
        <li key={i}>{item}</li>
      )
    }else{
      return list.content.map((item, i) => 
        <li key={i}>{item}</li>
      )
    }
  }
  renderLists = (listName) => {
    const la = this.props.la;        
    const lists = ABOUT[listName].list.map((item, i) => 
      <div key={`${listName}-list-${i}`}>
        <h3>{item.meta[la]}</h3>
        <ul>
          {this.renderItems(item, la)}
        </ul>
      </div>
    );
    return (
      <div className={listName}>
        <h3>{ABOUT[listName].meta[la]}</h3>
        <div className='list-wrapper'>    
          {lists}
        </div>
      </div>
    )    
  }
  render() {
    const la = this.props.la;
    return (
      <div id='about' className='main-container'>
        <h1>ABOUT ME</h1>
        <div className='content-container'>
          <p>{ABOUT.p[la]}</p>          
          {this.renderLists('skills')}          
        </div>
      </div>
    )
  }
}

About.defaultProps = {
  la: 'en'
}
import React, { Component } from 'react'

import { about } from '../constants/about';

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
    const lists = about[listName].list.map((item, i) => 
      <div key={`${listName}-list-${i}`}>
        <h3>{item.meta[la]}</h3>
        <ul>
          {this.renderItems(item, la)}
        </ul>
      </div>
    );
    return (
      <div className={listName}>
        <h3>{about[listName].meta[la]}</h3>
        <div className='list-wrapper'>    
          {lists}
        </div>
      </div>
    )    
  }
  render() {
    const la = this.props.la;
    return (
      <div id='about'>
        <h1>ABOUT ME</h1>
        <div className='content-wrapper'>
          <p>{about.p[la]}</p>          
          {this.renderLists('skills')}          
          <div className='interests'>
            <h3>INTERESTS</h3>  
            <div className='list-wrapper'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

About.defaultProps = {
  la: 'en'
}
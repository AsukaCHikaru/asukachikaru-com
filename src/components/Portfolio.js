import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem';

import portfolios from '../portfolios.json';

import '../styles/Portfolio.css';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.portfolios = [];    
  }
  componentWillMount(){
    this.mapPortfiliosToThis();
  }
  mapPortfiliosToThis = () =>{
    for (const key in portfolios) {
      if (portfolios.hasOwnProperty(key)) {
        const item = portfolios[key];
        this.portfolios.unshift(item);
      }
    }
  }
  renderPortfolios = () => {
    return (
      this.portfolios.splice(1, 2).map((item, i) => {
        return <PortfolioItem key={`portfolio-item-${i}`} item={item}/>
      })
    )
  };
  render() {
    
    return (
      <div id='portfolio'>
        <h1>SOME THINGS I'VE BUILT</h1>
        <div className='content-wrapper'>
        {this.renderPortfolios()}
        </div>

      </div>
    )
  }
}

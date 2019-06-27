import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltRight, faArrowAltLeft } from '@fortawesome/pro-light-svg-icons';

import PortfolioItem from './PortfolioItem';
import { portfolio } from '../constants/portfolio';

import '../styles/Portfolio.css';

export default class Portfolio extends Component {
  constructor(props){
    super(props);
    this.portfolio = [];    
    this.featured = [];
    this.state = {
      showmore: false,
    };
  }
  componentWillMount(){
    this.mapPortfilioToThis();
  }
  mapPortfilioToThis = () =>{
    for (const key in portfolio) {
      if (portfolio.hasOwnProperty(key)) {
        const item = portfolio[key];
        if(item.featured) this.featured.unshift(item);
        else this.portfolio.unshift(item);
      }
    }
  }
  renderFeatPortfolios = () => {    
    return (
      this.featured.map((item, i) => {
        return <PortfolioItem key={`portfolio-item-${i}`} item={item}/>
      })
    )
  };
  renderMorePortfolios = () => {
    return (
      this.portfolio.map((item, i) => {
        return <PortfolioItem key={`portfolio-item-${i}`} item={item}/>
      })
    )
  }
  renderMoreBtn = () => {
    return (
      <div className='portfolio-item-wrapper moreBtn'>
        <div className='portfolio-item'>
          <h3 onClick={() => {
            this.setState(preState => ({showmore: !preState.showmore}))
          }}>MORE <FontAwesomeIcon icon={faArrowAltRight} /></h3>
        </div>
      </div>
    )
  };
  renderBackBtn = () => {
    return (
      <div className='portfolio-item-wrapper backBtn'>
        <div className='portfolio-item'>
          <h3 onClick={() => {
            this.setState(preState => ({showmore: !preState.showmore}))
          }}><FontAwesomeIcon icon={faArrowAltLeft} /> BACK</h3>
        </div>
      </div>
    )
  };
  render() {
   
    return (
      <div id='portfolio'>
        <h1>SOME THINGS I'VE BUILT</h1>
        <div className='content-wrapper'>
          <div className='feat' style={{left: (this.state.showmore) ? `-100%` : '0'}}>
            {this.renderFeatPortfolios()}
            {this.renderMoreBtn()}
          </div>
          <div className='moreDiv' style={{left: (this.state.showmore) ? `-100%` : '0'}}>
            {this.renderMorePortfolios()}
            {this.renderBackBtn()}
          </div>
        </div>
      </div>
    )
  }
}

Portfolio.defaultProps = {
  la: 'en'
}
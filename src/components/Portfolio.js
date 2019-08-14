import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import PortfolioItem from './PortfolioItem';
import { portfolio } from '../constants/portfolio';

import '../styles/Portfolio.css';
import '../styles/rwd.css';

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
  renderNextPageBtn = () => {
    return(
      <div className='page-button-container next'>
        
        <button
          className={(this.state.showmore===true) ? 'hide next' : 'next'}
          onClick={() => {
            if(this.state.showmore===false) this.setState({showmore: true})
          }}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
    )
  };
  renderPrevPageBtn = () => {
    return (
      <div className='page-button-container prev'>
        <button
          className={(this.state.showmore===false) ? 'hide prev' : 'prev'}
          onClick={() => {
            if(this.state.showmore===true) this.setState({showmore: false})
          }}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
      </div>
    )
  };
  render() {
   
    return (
      <div id='portfolio'>
        <div className='main-container'>
        {this.renderPrevPageBtn()}
          <div className='sub-container'>
            <h1>SOME THINGS I'VE BUILT</h1>
            <div className='content-container'>
              <div className='semi-content-container' >
                <div className='feat' style={{left: (this.state.showmore) ? `-100%` : '0'}}>
                  {this.renderFeatPortfolios()}
                </div>
              </div>
              <div className='semi-content-container' >
                <div className='moreDiv' style={{left: (this.state.showmore) ? `-100%` : '0'}}>
                  {this.renderMorePortfolios()}
                </div>
              </div>
            </div>
          </div>
          {this.renderNextPageBtn()}
        </div>
      </div>
    )
  }
}

Portfolio.defaultProps = {
  la: 'en'
}
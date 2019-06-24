import React, { Component } from 'react';

import Navbar from './Navbar';
import Summary from './Summary';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { style } from '../constants/style';
import '../styles/App.css';

export default class App extends Component {  
  constructor(props){
    super(props);
    this.offsetTop = {
      portfolio: 0,
      about: 0,
      contact: 0,
    };
    this.state = {
      currSec: null,
      la: null,
      dark: true
    }
  }
  componentWillMount(){
    window.addEventListener('scroll', this.handleScroll);
    if(this.state.la===null) this.setState({la: navigator.language}) 
    this.renderNewBGColor();
  }
  componentDidMount(){
    for (const key in this.offsetTop) {
      if (this.offsetTop.hasOwnProperty(key)) {
        this.offsetTop[key] = document.querySelector(`#${key}`).offsetTop;        
      }
    }
    this.handleCurrSection(window.scrollY);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  changeLa = (newLa) => {
    this.setState({la: newLa})
  }
  changeDarkMode = () => {
    this.setState(preState => ({dark: !preState.dark}), () => this.renderNewBGColor())
  }
  renderNewBGColor = () => {
    let bgColor;
    if(this.state.dark) bgColor = style.$darkBGColor;
    else bgColor = style.$lightBGColor;
    document.querySelector('body').style.backgroundColor = bgColor;
  }
  handleCurrSection = (y) => {
    let currSec = null;
    if(y >= this.offsetTop.contact) currSec = 'contact';
    else if(y >= this.offsetTop.about-1) currSec = 'about';
    else if(y >= this.offsetTop.portfolio-1) currSec = 'portfolio';
    else currSec = 'summary';
    if(currSec !== this.state.currSec) this.setState({ currSec });
  }
  handleScroll = (e) => {
    this.handleCurrSection(window.scrollY)
  }
  render () {
    return(
      <div className={(this.state.dark) ? 'App dark' : 'App light'}>
        <Navbar 
          currSec={this.state.currSec}
          changeLa={this.changeLa}
          changeDarkMode={this.changeDarkMode}
          dark={this.state.dark}
          la={this.state.la}
        />
        <div className='content-wrapper'>
          <Summary />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

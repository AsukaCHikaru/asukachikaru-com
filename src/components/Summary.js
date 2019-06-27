import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Summary.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default class Summary extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCounter: 0,
    }
  }
  componentDidMount(){
    const sumText = document.querySelectorAll('#summary h1, #summary h2, #summary .start');    
    const show = setInterval(() => {
      sumText[this.state.showCounter].style.opacity = 1;                  
      this.setState(prevState => ({showCounter: prevState.showCounter+1}), () => {
        if(this.state.showCounter===sumText.length) clearInterval(show);
      });
      
    }, 800);
  }
  render() {
    return (
      <div id='summary'>
        <div className='intro'>
          <h1>Hi, </h1>
          <h1>my name is <span className='name'>Asuka Wang</span>.</h1>
          <h2>I'm a self-taught <span className='front-end'>Front-End</span> web developer</h2>
          <h2>based in <span className='base'>Fukuoka, Japan</span>.</h2>
          <h2>I <span className='love'>love</span> learning and building web stuff.</h2>
        </div>
        <div className='start'>
          <h1 onClick={() => {
            const targetY = document.querySelector(`#portfolio`).offsetTop;    
            window.scrollTo({
              top: targetY,
              left: 0,
              behavior: 'smooth'
            });
          }}>
            <FontAwesomeIcon icon={faCaretDown} />
          </h1>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import '../styles/Summary.css';
import { INTRO, KEYWORD } from '../constants/summary';

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

  renderIntro = () => {
    const introNode = INTRO[this.props.la].map((item, i) => {
      const keyword = /\$(\w+)/.exec(item);
      const string = (keyword!==null) ? item.replace(keyword[0], `<span class='${keyword[1]}'>${KEYWORD[this.props.la][keyword[0]]}</span>`) : item;
      return (i < 2) ?
        <h1 key={`intro-${i}`} dangerouslySetInnerHTML={{__html: string}}></h1> :
        <h2 key={`intro-${i}`} dangerouslySetInnerHTML={{__html: string}}></h2>
      ;
    });
    return introNode;
  }

  render() {
    return (
      <div id='summary'>
        <div className='intro'>
          {this.renderIntro()}
          {/* <h1>Hi, </h1>
          <h1>my name is <span className='name'>Asuka Wang</span>.</h1>
          <h2>I'm a self-taught <span className='front-end'>Front-End</span> web developer</h2>
          <h2>based in <span className='base'>Fukuoka, Japan</span>.</h2>
          <h2>I love <span className='passion'>learning and building</span> web stuff.</h2> */}
        </div>
        <div className='start'>
          <h2 onClick={() => {
            const targetY = document.querySelector(`#portfolio`).offsetTop;    
            window.scrollTo({
              top: targetY,
              left: 0,
              behavior: 'smooth'
            });
          }}>
            <FontAwesomeIcon icon={faCaretDown} />
          </h2>
        </div>
      </div>
    )
  }
}

Summary.defaultProps = {
  la: 'en'
}

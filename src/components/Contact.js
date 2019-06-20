import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/pro-light-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div id='contact'>
        <h1>FOLLOW ME</h1>
        <div className='content-wrapper'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet nisi a lorem elementum auctor eu ac leo. Pellentesque lorem magna, porta vel pretium quis, suscipit ac velit. Phasellus.</p>
          <div className='links'>
            <a 
              className='mail'
              href='mailto: asukachikaru@gmail.com' 
            ><FontAwesomeIcon icon={faEnvelope} /></a>
            <a 
              className='github'
              href='https://github.com/AsukaCHikaru' 
              target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faGithub} /></a>
            <a 
              className='linkedin'
              href='https://www.linkedin.com/in/asuka-wang-538a64168/' 
            target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a 
              className='blog'
              href='https://blog.asukachikaru.com' 
            target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faBlog} /></a>
            <a 
              className='twitter'
              href='https://twitter.com/AsukaCHikaru' 
            target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
    )
  }
}

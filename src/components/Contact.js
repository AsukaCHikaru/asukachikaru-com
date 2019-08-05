import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/pro-light-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/Contact.css';
import { CONTACT } from '../constants/contact';

export default class Contact extends Component {
  render() {
    return (
      <div id='contact' className='main-wrapper'>
        <h1>FOLLOW ME</h1>
        <div className='content-wrapper'>
          <p>{CONTACT.p[this.props.la]}</p>
          <div className='links'>
            <a 
              className='mail'
              href={`mailto: ${CONTACT.href.mail}`}
              target='_blank' rel='noopener noreferrer'
            ><FontAwesomeIcon icon={faEnvelope} /></a>
            <a 
              className='github'
              href={CONTACT.href.github} 
              target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faGithub} /></a>
            <a 
              className='linkedin'
              href={CONTACT.href.linkedin} 
            target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a 
              className='blog'
              href={CONTACT.href.blog}
            target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faBlog} /></a>
            <a 
              className='twitter'
              href={CONTACT.href.twitter}
            target='_blank' rel='noopener noreferrer' ><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
    )
  }
}

Contact.defaultProps = {
  la: 'en'
}
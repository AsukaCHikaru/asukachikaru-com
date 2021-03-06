import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/pro-light-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class PortfolioItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovered: false,
    }
  }
  renderRepoLink = () => {
    if(this.props.item.repo !== undefined) return (
      <a
        className='ext-link'
        href={this.props.item.repo}
        rel='noopener noreferrer'
        target='_blank'
      ><FontAwesomeIcon icon={faGithub}/></a>
    )
    else return null;
  }
  renderExtLink = () => {
    if(this.props.item.href !== undefined) return (
      <a
        className='ext-link'
        href={this.props.item.href}
        rel='noopener noreferrer'
        target='_blank'
      ><FontAwesomeIcon icon={faExternalLink}/></a>
    )
    else return null;
  }

  renderPortfolioItemContent = () => {
    const style = {
      backgroundColor:`#181818ee`
    }
    const className = (this.state.isHovered) ? 'portfolio-item hovered' : 'portfolio-item';
    return (
      <div style={style} className={className}>
        <h3>{this.props.item.title}</h3>
        <p>{this.props.item.about}</p>
        <h4>{this.props.item.builtWith.join(', ')}</h4>
        {this.renderExtLink()}
        {this.renderRepoLink()}
      </div>
    )
  }
  render() {
    const wrapperStyle = {
      backgroundImage:`url(${process.env.PUBLIC_URL}/${this.props.item.img})`,
      backgroundSize:`100% 100%`,
    };
    console.log(this.state.isHovered);
    return (
      
      <div
        className='portfolio-item-wrapper'
        onMouseEnter={()=>{this.setState({isHovered: true})}}
        onMouseLeave ={()=>{this.setState({isHovered: false})}}
        onClick={() => this.setState(prevState => ({isHovered: !prevState.isHovered}))}
        style={wrapperStyle}
      >
        {this.renderPortfolioItemContent()}
      </div>
    )
  }
}

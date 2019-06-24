import React, { Component } from 'react'


export default class PortfolioItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovered: false,
    }
  }
  renderPortfolioItemContent = () => {
    const style = {
      backgroundColor:`#222222EE`
    }
    const className = (this.state.isHovered) ? 'portfolio-item hovered' : 'portfolio-item';
    return (
      <div style={style} className={className}>
        <h3>{this.props.item.title}</h3>
        <p>{this.props.item.about}</p>
        <h4>{this.props.item.builtWith}</h4>
      </div>
    )
  }
  render() {
    const wrapperStyle = {
      backgroundImage:`url(${process.env.PUBLIC_URL}/${this.props.item.img})`,
      backgroundSize:`100% 100%`,
    };
    return (
      <div
        className='portfolio-item-wrapper'
        onMouseEnter={()=>{this.setState({isHovered: true})}}
        onMouseLeave ={()=>{this.setState({isHovered: false})}}
        style={wrapperStyle}
      >
        {this.renderPortfolioItemContent()}
      </div>
    )
  }
}

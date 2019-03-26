import React, { Component } from 'react';
import './Hero.scss';

class Hero extends Component {
  render() {
    return (
        <section className="hero">
            <div className="left">
              <h1> {this.props.header}</h1>
              <h3> {this.props.description }</h3>
            </div>
            <div className="right">
              <img src={this.props.badge}/>
            </div>
        </section>
    );
  }
}

export default Hero;

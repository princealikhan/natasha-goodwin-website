import React, { Component } from 'react';
import './Hero.scss';
import Button from '@material-ui/core/Button';

class Hero extends Component {
  
  state = {
    parentProps: this.props
  }

  componentDidMount() {
   console.log(this.state)
  }

  render() {
    const { header, description, badge, cta } = this.state.parentProps;
    return (
        <section className="hero">
            <div className="left">
              <h1> { header }</h1>
              <h3> { description }</h3>
              {
                cta ?
                <Button variant="outlined" style={{
                  border: '1px solid white',
                  color: 'white'
                }}>{ cta.text }</Button> : 
                ""
              }
            </div>
            <div className="right">
              <img src={ badge }/>
            </div>
        </section>
    );
  }
}

export default Hero;

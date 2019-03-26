import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import { siteData } from '../../constant';

import './About.scss';

class About extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Hero 
        header={ siteData.pages.about.hero.header }
        description={ siteData.pages.about.hero.description } 
        badge={ siteData.pages.about.hero.badge }/>
      </section>
    );
  }
}

export default About;

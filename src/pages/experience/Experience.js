import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import { siteData } from '../../constant';

import './Experience.scss';

class Experience extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Hero 
         header={ siteData.pages.experience.hero.header }
         description={ siteData.pages.experience.hero.description } 
         badge={ siteData.pages.experience.hero.badge }/>
      </section>
    );
  }
}

export default Experience;

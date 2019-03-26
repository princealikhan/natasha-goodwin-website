import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import { siteData } from '../../constant';

import './Work.scss';

class Work extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Hero 
        header={ siteData.pages.work.hero.header }
        description={ siteData.pages.work.hero.description } 
        badge={ siteData.pages.work.hero.badge }/>
      </section>
    );
  }
}

export default Work;

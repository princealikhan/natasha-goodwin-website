import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import { siteData } from '../../constant';

import './Contact.scss';

class Contact extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Hero 
        header={ siteData.pages.contact.hero.header }
        description={ siteData.pages.contact.hero.description } 
        badge={ siteData.pages.contact.hero.badge }/>
      </section>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import { siteData } from '../../constant';
import SketchIcon from '../../assets/images/sketch-icon.svg';
import IllustratorIcon from '../../assets/images/illustrator-icon.svg';
import MailchimpIcon from '../../assets/images/mailchimp-icon.svg';
import PhotoshopIcon from '../../assets/images/photoshop-icon.svg';
import ProcreateIcon from '../../assets/images/procreate-icon.svg';

import './Experience.scss';

class Experience extends Component {
  render() {
    return (
      <section>
        <Header/>
        <Hero 
          header={ siteData.pages.experience.hero.header }
          description={ siteData.pages.experience.hero.description } 
          badge={ siteData.pages.experience.hero.badge }
          cta={ siteData.pages.experience.hero.cta }
         />
        <div className='overview-container'>
          <h2>Quick Overview:</h2>
          <div className="is-row">
            <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4 overview-list">
              <div className="overview-item">
                <div className="overview-number">01</div>
                <div className="overview-text">
                  Design <br/>
                  & Illustration
                </div>
              </div>
            </div>
            <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4 overview-list">
              <div className="overview-item">
                <div className="overview-number">02</div>
                <div className="overview-text">
                  Client <br/>
                  Engagement
                </div>
              </div>
            </div>
            <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4 overview-list">
              <div className="overview-item">
                <div className="overview-number">03</div>
                <div className="overview-text">
                  Marketing & <br/>
                  Communications
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tools  */}
        <div class="tools">
          <h2>Tools</h2>
          <div className="is-row">
              <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4">
                <div className="tool-name">
                  <div>
                    <img src={SketchIcon}></img>
                  </div>
                  <div className="tool-name-text">
                    Sketch
                  </div>
                </div>
              </div>
              <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4">
                <div className="tool-name">
                  <div>
                    <img src={IllustratorIcon}></img>
                  </div>
                  <div className="tool-name-text">
                    Illustrator
                  </div>
                </div>
              </div>
              <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4">
                <div className="tool-name">
                  <div>
                    <img src={MailchimpIcon}></img>
                  </div>
                  <div className="tool-name-text">
                    Mailchimp
                  </div>
                </div>
              </div>
              <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4">
                <div className="tool-name">
                  <div>
                    <img src={PhotoshopIcon}></img>
                  </div>
                  <div className="tool-name-text">
                    Photoshop
                  </div>
                </div>
              </div>
              <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4">
                <div className="tool-name">
                  <div>
                    <img src={ProcreateIcon}></img>
                  </div>
                  <div className="tool-name-text">
                    Procreate
                  </div>
                </div>
              </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Experience;

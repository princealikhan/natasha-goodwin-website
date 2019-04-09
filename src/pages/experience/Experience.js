import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import { siteData } from '../../constant';
import { overview } from './overview';

import SketchIcon from '../../assets/images/sketch-icon.svg';
import IllustratorIcon from '../../assets/images/illustrator-icon.svg';
import MailchimpIcon from '../../assets/images/mailchimp-icon.svg';
import PhotoshopIcon from '../../assets/images/photoshop-icon.svg';
import ProcreateIcon from '../../assets/images/procreate-icon.svg';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '../../assets/images/close-icon.svg';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import './Experience.scss';

class Experience extends Component {

  componentDidMount(){
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
  }

  state = {
    open: false,
    currentDialogData: overview['design'],
  };

  handleDialogOpen = (selectedDialog) => {
    this.setState({ 
      open: true,
      currentDialogData: overview[selectedDialog]
     });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { fullScreen } = this.props;
    const { currentDialogData } = this.state;
    console.warn(overview['design']);
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
            <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4 overview-list" onClick={() => this.handleDialogOpen('design')}>
              <div className="overview-item">
                <div className="overview-number">01</div>
                <div className="overview-text">
                  Design <br/>
                  & Illustration
                </div>
              </div>
            </div>
            <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4 overview-list" onClick={() => this.handleDialogOpen('client')}>
              <div className="overview-item">
                <div className="overview-number">02</div>
                <div className="overview-text">
                  Client <br/>
                  Engagement
                </div>
              </div>
            </div>
            <div className="is-col-xs-12 is-col-sm-6 is-col-md-4 is-col-lg-4 overview-list" onClick={() => this.handleDialogOpen('marketing')}>
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
        <div className="tools">
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

      {/* Dialog */}
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleDialogClose}>
          <DialogTitle>
            <div className="model-header">
              <div className="title"> 
                { currentDialogData.title }
                </div>
              <div>
                <IconButton color="primary" onClick={this.handleDialogClose}>
                  <img src={CloseIcon}/>
                </IconButton>
              </div>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className="model-subheading">{ currentDialogData.subHeading }</div>
              <div className="model-desg">{ currentDialogData.desg }</div>
              <div className="model-timeline">{ currentDialogData.timeline }</div>

              <div className="model-description">{ currentDialogData.desc }</div>
              { (currentDialogData.keyPoints && currentDialogData.keyPoints.length > 0) ?
                (
                  <ul className="model-points">
                    {
                      currentDialogData.keyPoints.map( point => (
                        <li className="point">{point}</li>
                      ))
                    }
                  </ul>
                ):
                ""
              } 
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
      </section>
    );
  }
}

Experience.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(Experience);


import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Features from '../components/Features/Features';
import Examples from '../components/Examples/Examples';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';

import Molorak from '../pages/fullPages/molorak/Molorak';
import Rfs from '../pages/fullPages/rfs/Rfs';
import ArchPort from '../pages/fullPages/archPort/ArchPort';

import GalHead from '../pages/headers/GalHead/GalHead';
import SliderHead from '../pages/headers/SliderHead/SliderHead';
import VideoHead from '../pages/headers/VideoHead/VideoHead';

import CardEx from '../pages/others/CardEx/CardEx';
import FormEx from '../pages/others/FormEx/FormEx';
import IntroEx from '../pages/others/IntroEx/IntroEx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" render={props=>
              <div className="App">
                <Header />
                <About />
                <Resume />
                <Features />
                <Examples />
                <Form />
                <Footer />
              </div>} />
              <Route exact path="/molorak" component={Molorak} />
              <Route exact path="/rfs" component={Rfs} />
              <Route exact path="/portfolio" component={ArchPort} />

              <Route exact path="/gallery" component={GalHead} />
              <Route exact path="/slider" component={SliderHead} />
              <Route exact path="/video" component={VideoHead} />

              <Route exact path="/cards" component={CardEx} />
              <Route exact path="/form" component={FormEx} />
              <Route exact path="/intro" component={IntroEx} />

          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

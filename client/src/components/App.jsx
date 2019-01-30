import React, { Component } from 'react';

//components
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Live from './Live';
import Gallery from './Gallery';
import Contact from './Contact';
import Map from './Map';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Home />
        <AboutUs />
        <Live />
        <Gallery />
        <Contact />
        <Map />
      </div>
    );
  }
}

export default App;

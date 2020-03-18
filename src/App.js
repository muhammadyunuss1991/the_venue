import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/Featured/Index';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/HIghlights/Index';
import Pricing from './components/Pricing/Index';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Header/> 

        <Element name='Featured'>
          <Featured/>  
        </Element>
        
        <Element name='Venue Info'>
          <VenueInfo/>
        </Element>
        
        <Element name='Highlights'>
          <Highlights/>
        </Element>
        
        <Element name='Pricing'>
          <Pricing/>
        </Element>

        <Element name='Location'>
          <Location/>
        </Element>  
        
        <Footer/>
      </div>
    );
  }
}

export default App;

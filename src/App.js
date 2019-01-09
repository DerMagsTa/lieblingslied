import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Liederkarte from "./components/Liederkarte/Liederkarte.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="container AppContainer">
          {/* Überschrift */}
          {/* Erklärung */}
            
          {/* Cardcontainer */}
          <div className="Row">
            {/* Card mit Lied 1 */}
            <Liederkarte />
            {/* Card mit Lied 2 */}
            <Liederkarte />
          </div>

          {/* Liste ausgewählter Lieder */}

        
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;

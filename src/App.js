import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Liederkarte from "./components/Liederkarte/Liederkarte.js"
import SpotifyApi from "./util/SpotifyApi.js"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lieder: SpotifyApi.ladeLieder(),
      lied1: {},
      lied2: {},
      sieger: []
    }
    this.nächsteLieder = this.nächsteLieder.bind(this)
    this.liedAuswählen = this.liedAuswählen.bind(this)
  }

  componentWillMount(){
    /*
    let neueLieder = SpotifyApi.ladeLieder()
    this.setState({
      lieder: neueLieder.slice()
    })
    */
    console.log(this.state.lieder)
    this.nächsteLieder()
  }

  nächsteLieder(){
    let liedtemp1 = this.state.lieder[0].track
    console.log(liedtemp1)
    let liedtemp2 = this.state.lieder[1].track

    this.setState({
      lieder: this.state.lieder.slice(2),
      lied1: liedtemp1,
      lied2: liedtemp2
    })
  }

  liedAuswählen(id){
    if(id===1){
      this.setState({
        sieger: [...this.state.sieger,this.state.lied1]
      })
    } else {
      this.setState({
        sieger: [...this.state.sieger,this.state.lied2]
      })
    }
    if(this.state.lieder.length >= 2){
      this.nächsteLieder()
    } else{
      this.nächsteRunde()
    }
  }

  nächsteRunde(){
    //TODO Sieger auf Lieder setzten
    //TODO wenn Sieger.length === 1 -> Ende
  }

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
            <Liederkarte lied={this.state.lied1} id={1} auswahl={this.liedAuswählen}/>
            {/* Card mit Lied 2 */}
            <Liederkarte lied={this.state.lied2} id={2} auswahl={this.liedAuswählen}/>
          </div>

          {/* Liste ausgewählter Lieder */}

        
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;

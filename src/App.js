import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Liederkarte from "./components/Liederkarte/Liederkarte.js"
import Siegerkarte from "./components/Siegerkarte/Siegerkarte.js"
import SpotifyApi from "./util/SpotifyApi.js"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lieder: [],
      lied1: {},
      lied2: {},
      sieger: [],
      entscheidungGetroffen: false
    }
    this.nächsteLieder = this.nächsteLieder.bind(this)
    this.liedAuswählen = this.liedAuswählen.bind(this)
    this.nächsteRunde = this.nächsteRunde.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentWillMount(){
    SpotifyApi.ladeLieder().then(neueLieder =>{
      this.setState({
        lieder: neueLieder
      }, () => {
        this.nächsteLieder()
      })
      //this.nächsteLieder()
    })
  }

  nächsteLieder(){
    if(this.state.lieder.length > 0) {
      console.log("nächste lieder fängt erfolgreich an")
      console.log(this.state.lieder)
      let liedtemp1 = this.state.lieder[0]
      let liedtemp2 = this.state.lieder[1]
      console.log(liedtemp1)
      this.setState({
        lieder: this.state.lieder.slice(2),
        lied1: liedtemp1,
        lied2: liedtemp2
      }, () => {
        console.log(this.state.lied1)
      })
    }
  }

  liedAuswählen(id){
    if(id===1){
      this.setState({
        sieger: [...this.state.sieger,this.state.lied1]
      },() => {
        if(this.state.lieder.length >= 2){
          this.nächsteLieder()
        } else{
          this.nächsteRunde()
        }
      })
    } else {
      this.setState({
        sieger: [...this.state.sieger,this.state.lied2]
      },() => {
        if(this.state.lieder.length >= 2){
          this.nächsteLieder()
        } else{
          this.nächsteRunde()
        }
      })
    }
  }

  nächsteRunde(){
    console.log("nächste Runde")
    if(this.state.sieger.length === 1) {
      this.setState({
        entscheidungGetroffen: true
      })
    } else {
      console.log("State ändern auf sieger")
      this.setState({
        lieder: this.state.sieger,
        sieger: []
      }, ()=>{
        console.log(this.state.lieder)
        console.log("nächste lieder")
        this.nächsteLieder()
      })
        
    }
  }

  reset(){
    SpotifyApi.ladeLieder().then(neueLieder =>{
      this.setState({
        lieder: neueLieder,
        lied1: {},
        lied2: {},
        sieger: [],
        entscheidungGetroffen: false
      })
      this.nächsteLieder()
    })
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
            {!this.state.entscheidungGetroffen ? <Liederkarte lied={this.state.lied1.track} id={1} auswahl={this.liedAuswählen}/> : null}
            {/* Card mit Lied 2 */}
            {!this.state.entscheidungGetroffen ? <Liederkarte lied={this.state.lied2.track} id={2} auswahl={this.liedAuswählen}/> : null}
            {/* Siegerkarte (wenn vorbei) */}
            {this.state.entscheidungGetroffen ? <Siegerkarte lied={this.state.sieger[0].track} reset={this.reset}/> : null}
          </div>

          {/* Liste ausgewählter Lieder */}

        
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;

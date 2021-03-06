import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Liederkarte from "./components/Liederkarte/Liederkarte.js"
import Siegerkarte from "./components/Siegerkarte/Siegerkarte.js"
import Siegerliste from "./components/Siegerliste/Siegerliste.js"
import Login from "./components/Login/Login.js"
import SpotifyApi from "./util/SpotifyApi.js"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lieder: [],
      lied1: {},
      lied2: {},
      sieger: [],
      entscheidungGetroffen: false,
      loggtin: false,
      runde: 1,
      anzahlLiederInRunde: 20
    }
    this.nächsteLieder = this.nächsteLieder.bind(this)
    this.liedAuswählen = this.liedAuswählen.bind(this)
    this.nächsteRunde = this.nächsteRunde.bind(this)
    this.loginFunc = this.loginFunc.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search)
    const accessToken = urlParams.get('access_token')
    if(accessToken) {
      SpotifyApi.ladeLieder(accessToken).then(neueLieder =>{
        this.setState({
          lieder: neueLieder,
          loggtin: true
        }, () => {
          this.nächsteLieder()
        })
      })
    } 
    
  }

  nächsteLieder(){
    if(this.state.lieder.length > 0) {
      let liedtemp1 = this.state.lieder[0]
      let liedtemp2 = this.state.lieder[1]
      this.setState({
        lieder: this.state.lieder.slice(2),
        lied1: liedtemp1,
        lied2: liedtemp2
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

      this.setState({
        lieder: this.state.sieger,
        sieger: [],
        runde: this.state.runde+1,
        anzahlLiederInRunde: this.state.sieger.length 
      }, ()=>{
        this.nächsteLieder()
      })
        
    }
  }

  reset(){
    const urlParams = new URLSearchParams(window.location.search)
    const accessToken = urlParams.get('access_token')
    SpotifyApi.ladeLieder(accessToken).then(neueLieder =>{
      this.setState({
        lieder: neueLieder,
        lied1: {},
        lied2: {},
        sieger: [],
        entscheidungGetroffen: false,
        runde: 1,
        anzahlLiederInRunde: 20
      })
      this.nächsteLieder()
    })
  }

  loginFunc(){
    console.log("login")
    window.location = "http://localhost:8888/login"
   
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="container AppContainer">
          {/* Überschrift */}
          <h1 className="überschrift">Was ist dein Lieblingslied?</h1>
          {/* Erklärung */}
          <h3 className="erklärung" >einfach jeweils das Lied auswählen, welches dir besser gefällt.</h3>
          {!this.state.loggtin 
            ? <Login loginFunc={this.loginFunc}/>
            : <div>
                {!this.state.entscheidungGetroffen  ? <h3 className="runde" >Runde {this.state.runde} - {this.state.anzahlLiederInRunde} Lieder</h3> : null }
                <div className="row justify-content-center">
                  {/* Card mit Lied 1 */}
                  {!this.state.entscheidungGetroffen ? <Liederkarte lied={this.state.lied1.track} id={1} auswahl={this.liedAuswählen}/> : null}
                  {/* Card mit Lied 2 */}
                  {!this.state.entscheidungGetroffen ? <Liederkarte lied={this.state.lied2.track} id={2} auswahl={this.liedAuswählen}/> : null}
                  {/* Siegerkarte (wenn vorbei) */}
                  {this.state.entscheidungGetroffen  ? <Siegerkarte lied={this.state.sieger[0].track} reset={this.reset}/> : null}
                </div>
                <div className="row">
                  {/* Siegerliste (wenn noch mehrere) */}
                  {!this.state.entscheidungGetroffen  ? <Siegerliste sieger={this.state.sieger} /> : null}
                </div>
              </div>   
          }

          {/* Cardcontainer */}
          
            

          {/* Liste ausgewählter Lieder */}

        
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;

import React from "react"
import "./Liederkarte.css"

class Liederkarte extends React.Component  {

  handleAuswahl(id){
    this.props.auswahl(id)
  }

  render() {
    if(typeof(this.props.lied)==="undefined" || typeof(this.props.lied.name)==="undefined") {
      return (
        <div className="col-sm-6">
        <div className="thumbnail">
          <div className="caption">
            <h3>Lade...</h3>
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div className="col-sm-6">
          <div className="thumbnail">
            <img src={this.props.lied.album.images[1].url} alt="Albumcover des aktuellen Lieds"/>
            <div className="caption">
              <h3>{this.props.lied.name}</h3>
              <p>{this.props.lied.artists[0].name}</p>
              <p>{this.props.lied.album.name}</p>
              <audio controls="" id="1_Audio" src={this.props.lied.preview_url}>
                <source src="" type="audio/mpeg" />
              </audio>
              <button className="btn btn-primary" onClick={this.handleAuswahl.bind(this, this.props.id)}>dieses Lied auswählen</button>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Liederkarte

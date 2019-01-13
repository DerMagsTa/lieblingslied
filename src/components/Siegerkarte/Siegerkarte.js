import React from "react"
import "./Siegerkarte.css"

class Siegerkarte extends React.Component  {
  render() {
    return (
      <div className="Siegerkarte col-sm-12">
        <div className="thumbnail">
          <img src={this.props.lied.album.images[1].url} alt="Albumcover des aktuellen Lieds"/>
          <div className="caption">
            <h4>Dein Lieblingslied ist:</h4>
            <h3>{this.props.lied.name}</h3>
            <p>{this.props.lied.artists[0].name}</p>
            <p>{this.props.lied.album.name}</p>
            <audio controls="" id="1_Audio" src={this.props.lied.preview_url}>
              <source src="" type="audio/mpeg" />
            </audio>
            <button className="btn btn-primary" onClick={this.props.reset}>neuer Versuch</button>
          </div>
        </div>
      </div>
    )
  }
}


export default Siegerkarte

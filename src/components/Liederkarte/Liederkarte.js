import React from "react"
import "./Liederkarte.css"

class Liederkarte extends React.Component  {


  render() {
    return (
      <div className="col-sm-6">
        <div className="thumbnail">
          <img src="..." alt="..."/>
          <div className="caption">
            <h3>Vorschaubild-Titel</h3>
            <p>...</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}


export default Liederkarte

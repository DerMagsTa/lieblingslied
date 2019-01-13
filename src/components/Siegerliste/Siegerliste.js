import React from "react"

class Siegerliste extends React.Component {


  render(){
    return (
      <div className ="Siegerliste">
        <h3>bisher ausgewählte Lieder:</h3>
        <ul className="list-group">
        {this.props.sieger.map( (element, index, array) => {
          return (
            <li key={"Sieger_"+index} className="Siegerelment list-group-item d-flex justify-content-between align-items-center">
              {element.track.name} - {element.track.artists[0].name}
              <span className="badge badge-primary badge-pill">{element.track.popularity}</span>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Siegerliste
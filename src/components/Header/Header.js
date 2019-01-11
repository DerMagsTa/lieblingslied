import React from "react"
import "./Header.css"

class Header extends React.Component  {


  render() {
    return (
      <header id="home">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Navigation ein-/ausblenden</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#home">Projekt-Titel</a>
            </div>

            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#home">Start</a></li>
                <li><a href="#ueber">Über</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
              </ul>
            </div>

          </div>
        </nav>
      </header>
    )
  }
}


export default Header

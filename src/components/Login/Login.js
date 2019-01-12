import React from "react"
import "./Login.css"

class Login extends React.Component  {
  render() {
      return (
        <div className="col-sm-6">
          <div className="thumbnail">
              <button className="btn btn-primary" onClick={this.props.loginFunc}>Einloggen mit Spotify</button>
          </div>
        </div>
      )
    }
}


export default Login

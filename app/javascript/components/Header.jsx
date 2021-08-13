import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.loggedIn,
      user: props.user
    }
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state){
    if (props.loggedIn !== state.isLoggedIn) {
      return {
        isLoggedIn: props.loggedIn,
        user: props.user
      };
    }
    return null;
  }

  handleLogout(){
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  handleClick(){
    const url = '/logout';
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "Post",
      headers: {
        "X-CSRF-Token": token,
            "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    })
    .then(async response => {
      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson && await response.json();
        if (data.logged_out){
          this.handleLogout(data);
          this.props.history.push('/')
        }else{
          const error = data || response.status;
          return Promise.reject(error);
        }
    })
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let logoutBtn = ''
    if(isLoggedIn){
      logoutBtn = <div className="d-flex flex-row-reverse"><button onClick={this.handleClick} className="btn btn-lg custom-button " role="button">Logout</button></div>
    }
    return(
      <div className="container">
        <div className="primary-color d-flex align-items-center justify-content-center">
          <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
              <h1 className="display-4">Property Management App</h1>
              <p className="lead text-center">
                Manage and list handpicked properties
              </p>
              <hr className="my-4" />
            </div>
          </div>
        </div>
        
        {logoutBtn}
      </div>
    )
  }
}

export default withRouter(Header);
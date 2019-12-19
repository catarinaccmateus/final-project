import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./views.css"

// import { listUser as listUser } from './../services/authentication';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  // async componentDidMount() {
  //   try {
  //     const user = await listUser();
  //     this.setState({
  //       user
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    return (
      <main className = "App-layers m-3 text-center w-100" style={{"height":"500px"}}>
      <button type="button" className="btn btn-light m-2 p-3 w-60" style={{"minHeight":"10%", border: "2px solid #3043C8", backgroundColor: "#f0f0f2"}}><Link to= "/themes" className='display-4' style={{"color":"#3043C8"}}> <h3>Begin a new journey stop fucking with me</h3></Link></button>
      <button type="button" className="btn btn-light m-2 w-60" style={{"minHeight":"10%",border: "#f0f0f2", backgroundColor: "#f0f0f2"}}><Link to= "/info" className='display-4' style={{"color":"#444A6C"}}><img className ="m-0" src = "../brain.png" style={{"width":"0.75em"}}/><h6>Why create Mindspan?</h6></Link></button>
      </main>
    );
  }
}

export default HomeView;
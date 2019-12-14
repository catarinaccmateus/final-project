import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {signIn as signInService} from './../../services/authentication';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmissionLogIn = this.handleSubmissionLogIn.bind(this);
  }

handleInputChange(event) {
  const nameInput = event.target.name;
  const value = event.target.value;
  this.setState({
    [nameInput]:value
  });
}

async handleSubmissionLogIn(event) {
event.preventDefault();
try {
await signInService(this.state);
this.props.loadUserInformation();  //this is repeating the step above
this.props.history.push(`/profile`);
} catch (error) {
  console.log(error);
  //create a redirect to error page
 }
}

  render() {
    console.log('test');
    return (
      <div className='container text-center box-shadow p-3'>
       <form onSubmit={this.handleSubmissionLogIn} className='text-center d-flex flex-column align-items-center w-100'>
       <h3 className="text-center mb-3">Sign in</h3>
        <label htmlFor="username">Username</label> <input type="text" name="username" className='w-50 form-control' onChange={this.handleInputChange} value={this.state.username}/>
        <br/>
         <label htmlFor="password w-50">Password</label><input type="password" name="password" className='w-50 form-control' onChange={this.handleInputChange} value={this.state.password}/>
         <button className="btn m-3 text-white p-2" style={{"backgroundColor":"#444A6C"}}>Log in</button>
         <Link to='/signup'>Register</Link>
       </form> 
      </div>
    )
  }
}
export default Login
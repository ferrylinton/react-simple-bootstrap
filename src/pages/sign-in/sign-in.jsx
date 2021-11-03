import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { setLoggedUser } from '../../redux/logged-user/logged-user.actions';
import './sign-in.scss';


class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername: '',
      password: ''
    }

  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));

    if(this.state.password === '123456'){
      this.props.setLoggedUser({
        emailOrUsername: this.state.emailOrUsername
      })
    }
    
  }

  render() {
    return (
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light">
        <Form onSubmit={this.handleSubmit} className="sign-form">
          <FloatingLabel controlId="emailOrUsername" label="Email or Username" className="mb-3">
            <Form.Control type="text" placeholder="Enter email or username" name="emailOrUsername" value={this.state.emailOrUsername} onChange={this.handleChange} />
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password" className="mb-5">
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          </FloatingLabel>
          <div className="d-flex">
            <Button variant="secondary" type="button" className="flex-fill">Sign With Google</Button>
            <Button variant="primary" type="submit" className="flex-fill ms-2">Sign</Button>
          </div>

        </Form>
      </div >
    )
  }

}

const mapDispatchToProps = dispatch => ({
  setLoggedUser: user => dispatch(setLoggedUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './login-form.scss';


class LoginForm extends React.Component {

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
    alert(JSON.stringify(this.state));
    e.preventDefault();
  }

  render() {
    return (
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FloatingLabel controlId="emailOrUsername" label="Email or Username" className="mb-3">
            <Form.Control type="text" placeholder="Enter email or username" name="emailOrUsername" value={this.state.emailOrUsername} onChange={this.handleChange} />
          </FloatingLabel>
          <FloatingLabel controlId="password" label="Password" className="mb-5">
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          </FloatingLabel>
          <div className="d-flex">
            <Button variant="secondary" type="button" className="flex-fill">Login With Google</Button>
            <Button variant="primary" type="submit" className="flex-fill ms-2">Login</Button>
          </div>

        </Form>
      </div >
    )
  }

}

export default LoginForm;
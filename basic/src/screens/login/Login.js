import React, { Component } from 'react';
import { Input } from '../../components'
import { auth } from '../../app/firebase'
import { constraints } from './constraints'
import { ModalContext } from '../../store'
import validate from 'validate.js'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailErrors: null,
      passwordErrors: null
    };
  }

  onLogin = (e, modalStore) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      let res = validate({ email, password }, constraints);
      if (res) {
        this.setState({
          emailErrors: res.email,
          passwordErrors: res.password
        })
      } else {
        auth.signInWithEmailAndPassword(email, password)
        this.props.history.push('/')
      }
    } catch (e) {
      modalStore.alert(
        e.code,
        e.message,
        'Try Again'
      )
    }

  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value,
      [field + 'Errors']: null,
    })
  }

  render() {
    return <ModalContext.Consumer>
      {modalStore => {
        return (
          <div className="bg-gray-200 pt-24">
            <div className="font-bold">
              <h1>Login</h1>
            </div>
          <div className="w-full flex flex-row justify-center items-center bg-white mx-auto">
            <div className="p-12 bg-white flex flex-col justify-around rounded" style={{}}>
              {this.state.remoteError &&
                <div className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 mx-6 rounded relative" role="alert">
                  <span className="block sm:inline">{this.state.remoteError}</span>
                </div>
              }
              <div className="p-6">
                <div className="flex justify-between">
                  <form onSubmit={(e) => this.onLogin(e,modalStore)} className="flex flex-col justify-center items-start p-12">
                    <Input
                      label="Email"
                      placeholder=""
                      field="email"
                      value={this.state.email}
                      errors={this.state.emailErrors}
                      onChange={this.handleChange}
                    />
                    <Input
                      label="Password"
                      placeholder=""
                      field="password"
                      type="password"
                      value={this.state.password}
                      errors={this.state.passwordErrors}
                      onChange={this.handleChange}
                    />
                      <button className="hover:bg-blue-darker bg-black w-full text-white font-bold py-4 mt-6 tracking-wide" type="submit">
                      Login
                      </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      }}
    </ModalContext.Consumer>
  }
}

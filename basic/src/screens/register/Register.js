import React from "react";
import { constraints } from './constraints'
import { Input } from '../../components'
import validate from "validate.js"
import firebase from 'firebase'
import { ModalContext } from '../../store'

export class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      firstNameErrors: null,
      lastNameErrors: null,
      emailErrors: null,
      passwordErrors: null,
      remoteError: null
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value,
      [field + 'Errors']: null,
    })
  }

  validate = async (e, modalStore) => {
    let res = validate(this.state, constraints);
    if (res) {
      this.setState({
        firstNameErrors: res.firstName || null,
        lastNameErrors: res.lastName || null,
        emailErrors: res.email || null,
        passwordErrors: res.password || null
      })
    } else {
      await this.submit(modalStore)
    }
  }

  async submit(modalStore) {
    try {
      let { email, password, firstName, lastName } = this.state
      var createUser = firebase.functions().httpsCallable('createUser');
      createUser({
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:password
      }).then(function(value) {
          console.log(value)
        })
      this.props.history.push('/Users')

    } catch (e) {
      modalStore.alert(
        e.code,
        e.message,
        'Try Again'
      )
    }

  }

  render() {
    return <ModalContext.Consumer>
      {modalStore => {
        return (
          <div className="bg-gray-200 pt-24">
            <div className="font-bold">
              <h1>Add a new user</h1>
            </div>
          <div className="w-full flex flex-row justify-center items-center bg-white mx-auto">
            <div className="lg:w-2/5 p-12 bg-white flex flex-col justify-around rounded" style={{}}>
              {this.state.remoteError &&
                <div className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 mx-6 rounded relative" role="alert">
                  <span className="block sm:inline">{this.state.remoteError}</span>
                </div>
              }
              <div className="p-6">
                <div className="flex flex-col justify-between">
                  <Input
                    label="First name"
                    placeholder="First Name"
                    field="firstName"
                    errors={this.state.firstNameErrors}
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    field="lastName"
                    errors={this.state.lastNameErrors}
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                <Input
                  label="Email"
                  placeholder="Email"
                  field="email"
                  errors={this.state.emailErrors}
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Input
                  label="Password"
                  placeholder="Password"
                  field="password"
                  type="password"
                  errors={this.state.passwordErrors}
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button
                  onClick={(e) => this.validate(e, modalStore)}
                  className="hover:bg-blue-darker bg-black w-full text-white font-bold py-4 mt-6 tracking-wide"
                >
                  Add User
            </button>
              </div>
            </div>
          </div>
          </div>
        )
      }}
    </ModalContext.Consumer>
  }
}

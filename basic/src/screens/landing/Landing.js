import React, { useState, useContext } from 'react'
import { Context, ModalContext } from '../../store'
import { Input } from '../../components'
import { constraints } from './constraints'
import firebase from 'firebase'
import validate from "validate.js"

export function Landing(props) {
  let [{user, authed}] = useContext(Context)

  let [state, setState] = useState({
    name: '',
    name: null,
})

  const handleChange = (field, e) => {
    setState({
      ...state,
      [field]: e.target.value,
      [field + 'Errors']: null,
    })
  }

  const check = async (e) => {
    let res = validate(state, constraints);
    if (res) {
      console.log(res)
      setState({
        ...state,
        name: res.name || 'unknown name',
      })
    } else {
      await submit()
    }
  }

  function goNow(){}

  const submit = async (e,modalStore) => {
    try {
      let creator = await firebase.firestore().collection('signups').where("email", "==", user.email).get()
      if(!authed) {
        modalStore.alert('Oh no','Please create an account first by signing up','Close')
        return
      } else if (creator) {
        modalStore.alert('Oh no','You already signed up! We will be in touch soon!','Close')
        return
      } else {
        await firebase.firestore().collection('signups').doc(user.user.id).set({
          email: state.email,
          name: state.name,
          id: firebase.auth().currentUser.uid,
        })
      modalStore.alert('Success','Thanks for signing up we will reach out to you shortly!','Close')
      }
    } catch (e) {
      console.log(e)
    }

  }

  return <ModalContext.Consumer>
    {modalStore => {
      return (
    <div className="flex flex-wrap w-full pb-8 bg-white justify-center">

      <div className="flex flex-wrap bg-gray-200 w-full justify-center">
        <div className="w-3/4 flex flex-wrap p-8">
          <div className="w-1/2 content-center flex flex-wrap">
            <div>
              <p className="text-6xl font-black w-full text-black">Why?</p>
              <p className="text-4xl font-black w-full text-gray-700">
                This thing really shines with xyz.
                1234567890.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-200">
            <img src={require('../../static/undraw_cooking_lyxy.svg')} alt="temp"></img>
          </div>
        </div>
      </div>

      <div className="w-3/4 flex flex-wrap py-8">

        <div className="w-full flex flex-row py-4 my-4">
          <div className="w-1/2 content-center flex flex-wrap">
            <div>
              <p className="text-6xl font-black w-full text-black">Why?</p>
              <p className="text-4xl font-black w-full text-gray-700">
                This thing really shines with xyz.
                1234567890.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-200 bg-white">
            <img src={require('../../static/undraw_online_messaging_9ro6.svg')} alt="temp"></img>
          </div>
        </div>

        <div className="w-full flex flex-row py-4 my-4">
          <div className="w-1/2 bg-white">
            <img src={require('../../static/undraw_voice_assistant_nrv7.svg')} alt="temp"></img>
          </div>
          <div className="w-1/2 content-center flex flex-wrap">
            <div>
              <p className="text-6xl font-black w-full text-black">Why?</p>
              <p className="text-4xl font-black w-full text-gray-700">
                This thing really shines with xyz.
                1234567890.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row py-4 my-4">
          <div className="w-1/2 content-center flex flex-wrap">
            <div>
              <p className="text-6xl font-black w-full text-black">Why?</p>
              <p className="text-4xl font-black w-full text-gray-700">
                This thing really shines with xyz.
                1234567890.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-200 bg-white">
            <img src={require('../../static/undraw_breakfast_psiw.svg')} alt="temp"></img>
          </div>
        </div>

        <div className="w-full flex flex-row pt-16 my-4 border-t">
          <div className="w-full content-center flex flex-wrap">
            <div className="w-1/2">
              <p className="text-6xl font-black w-full text-black">Get Started</p>
                <Input
                label="Name"
                placeholder="ex: Name"
                field="name"
                errors={state.nameErrors}
                value={state.name}
                onChange={handleChange}
              />
              <Input
                label="Email"
                placeholder="ex: email@yourmail.com"
                field="email"
                errors={state.emailErrors}
                value={state.email}
                onChange={handleChange}
              />
              <button
              onClick={(e) => check(e)}
              className="font-lato text-lg rounded shadow w-1/2 h-16 mt-12 bg-white font-bold px-6 py-3 rounded text-sm text-black"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="w-1/2 h-200 bg-white">
            <img src={require('../../static/undraw_lightbulb_moment_evxr.svg')} alt="temp"></img>
          </div>
        </div>

      </div>
    </div>
      )
    }}
  </ModalContext.Consumer>
}
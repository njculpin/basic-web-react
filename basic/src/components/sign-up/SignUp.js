import React, { useState, useContext, useEffect } from 'react'
import { Context, ModalContext } from '../../store'
import validate from 'validate.js'
import { useEffectAsync } from '../../utils'
import { Input } from '../../components'
import firebase from 'firebase'
import { constraints } from './constraints'

export const SignUp = (props) => {

  let [state, setState] = useState({
    email:''
  })

  useEffectAsync(async () => {
    try {
    } catch (e) {
      console.log(e)
    }
  }, [])

  const handleChange = (field, e) => {
    setState({
      [field]: e.target.value,
      [field + 'Errors']: null,
    })
  }

  const validate = async (e, modalStore) => {
    let res = validate(state, constraints);
    if (res) {
      setState({
        nameErrors: res.firstName || null,
        emailErrors: res.email || null,
      })
    } else {
      await submit(modalStore)
    }
  }

  const generatePassword = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

  const submit = async (e,modalStore) => {
    try {
      let { email } = state
      // auth
      let res = await firebase.auth().createUserWithEmailAndPassword(email, generatePassword())
      // post
      if (res) {
        await firebase.firestore()
          .collection('users')
          .doc(res.user.uid)
          .set({
            product_interest: ["basic"],
            email: email,
            joined: firebase.firestore.FieldValue.serverTimestamp(),
            id: res.user.uid,
            role: "user",
          }).then(
            modalStore.alert(
              e.code,
              e.message,
              'Great, talk to you soon!'
            )
          )
      }
    } catch (e) {
      modalStore.alert(
        e.code,
        e.message,
        'Try Again'
      )
    }

  }

  return <ModalContext.Consumer>
      {modalStore => {
      return (
        <div>
          <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
            <Input
              label="Email"
              placeholder="email@youremail.com"
              field="email"
              value={state.email}
              errors={state.emailErrors}
              onChange={handleChange}
            />
            <button
              onClick={(e) => submit(e, modalStore)}
              className="rounded-full p-4 mt-8 bg-white text-black w-auto h-12 shadow">
              Submit
            </button>
          </div>
        </div>
      )
    }}
    </ModalContext.Consumer>
}
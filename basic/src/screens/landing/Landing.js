import React from 'react'
import Mailchimp from './Mailchimp'

export function Landing(props) {

  function goNow(){

  }

  function MailChimp() {
    return (
      <div className="w-full justify-center items-center text-center">
       <Mailchimp
       action=''
       fields={[
         {
           name: 'FNAME',
           placeholder: 'First Name',
           required: true
         },
         {
           name: 'LNAME',
           placeholder: 'Last Name',
           required: true
         },
         {
           name: 'EMAIL',
           placeholder: 'Email',
           required: true
         },
       ]}
       />
       </div>
    )
  }

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
            <div className="w-full">
              <p className="text-6xl font-black w-full text-black">Get Started</p>
              <MailChimp/>
            </div>
          </div>
          <div className="w-1/2 h-200 bg-white">
            <img src={require('../../static/undraw_lightbulb_moment_evxr.svg')} alt="temp"></img>
          </div>
        </div>

      </div>
    </div>
  )
}
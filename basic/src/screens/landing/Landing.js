import React from 'react'
import { SignUp } from '../../components'

export function Landing(props) {

  const topWedge = require('../../static/top-wedge.svg')
  const topDiv = {
    backgroundImage: `url(${topWedge})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bottomWedge = require('../../static/bottom-wedge.svg')
  const bottomDiv = {
    backgroundImage: `url(${bottomWedge})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="flex flex-wrap w-full pb-8 bg-gray-100 justify-center">

      <div className="flex flex-wrap w-full justify-center bg-white">
        
      <div className="flex flex-wrap w-full justify-center" style={topDiv}>
        <div className="w-3/4 flex flex-wrap  py-12 my-12">
          <div className="w-1/2 content-center flex flex-wrap pr-2">
            <div>
              <p className="text-6xl font-black w-full text-black">Product Name</p>
              <p className="text-4xl font-black w-full text-gray-700">
                Product description. Something about what this thing does. Keep it Short.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-200 pl-2">
            <img src={require('../../static/undraw_cooking_lyxy.svg')} alt="temp"></img>
          </div>
        </div>
      </div>

      <div className="w-3/4 flex flex-wrap py-8">

      <div className="w-full flex flex-row py-4 my-4">
          <div className="w-1/2 bg-white pr-2">
            <img src={require('../../static/undraw_voice_assistant_nrv7.svg')} alt="temp"></img>
          </div>
          <div className="w-1/2 content-center flex flex-wrap pl-2">
            <div>
              <p className="text-4xl font-black w-full text-black">Why?</p>
              <p className="text-4xl font-black w-full text-gray-700">
                This thing really shines with xyz.
                1234567890.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row py-4 my-4">
          <div className="w-1/2 content-center flex flex-wrap pr-2">
            <div>
              <p className="text-4xl font-black w-full text-black">Why?</p>
              <p className="text-4xl font-black w-full text-gray-700">
                This thing really shines with xyz.
                1234567890.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-200 bg-white pl-2">
            <img src={require('../../static/undraw_online_messaging_9ro6.svg')} alt="temp"></img>
          </div>
        </div>

        <div className="w-full flex flex-row py-4 my-4">
          <div className="w-1/2 bg-white pr-2">
            <img src={require('../../static/undraw_breakfast_psiw.svg')} alt="temp"></img>
          </div>
          <div className="w-1/2 content-center flex flex-wrap pl-2">
            <div>
              <p className="text-4xl font-black w-full text-black">Why?</p>
              <p className="text-4xl font-black w-full text-gray-700">
                This thing really shines with xyz.
                1234567890.
              </p>
            </div>
          </div>
        </div>

      </div>
      
      <div className="flex flex-wrap w-full justify-center bg-gray-100 py-12 my-12">

        <div className="w-3/4 py-8">

          <div className="flex flex-wrap w-full py-8">
            <p className="text-4xl font-black w-full text-gray-700">Features and Plans</p>
          </div>

          <div className="w-full flex flex-wrap bg-white justify-center">

              <div className="w-1/3 h-auto border shadow">

                <div className="border-b h-12 justify-center m-2">
                  <p className="font-bold text-md">Tier 1</p>
                </div>

                <div className="h-auto m-2">
                  <p className="text-md">
                    Description of things Description of things Description of things
                    Description of things Description of things Description of things
                  </p>
                </div>

                <div className="h-auto m-2 justify-center">
                  <p className="w-1/4 font-bold text-sm bg-gray-100 rounded-full">
                    $1.99
                  </p>
                </div>

              </div>

              <div className="w-1/3 h-auto border shadow">

                <div className="border-b h-12 justify-center m-2">
                  <p className="font-bold text-md">Tier 2</p>
                </div>

                <div className="h-auto m-2">
                  <p className="text-md">
                    Description of things Description of things Description of things
                    Description of things Description of things Description of things
                  </p>
                </div>

                <div className="h-auto m-2 justify-center">
                  <p className="w-1/4 font-bold text-sm bg-gray-100 rounded-full">
                    $1.99
                  </p>
                </div>

              </div>

              <div className="w-1/3 h-auto border shadow">

                <div className="border-b h-12 justify-center m-2">
                  <p className="font-bold text-md">Tier 3</p>
                </div>

                <div className="h-auto m-2">
                  <p className="text-md">
                    Description of things Description of things Description of things
                    Description of things Description of things Description of things
                  </p>
                </div>

                <div className="h-auto m-2 justify-center">
                  <p className="w-1/4 font-bold text-sm bg-gray-100 rounded-full">
                    $1.99
                  </p>
                </div>

              </div>

          </div>
          
        </div>

      </div>

      <div className="flex flex-wrap w-full justify-center" style={bottomDiv}>
        <div className="w-3/4 flex flex-wrap  py-12 my-12">
          <div className="w-1/2 content-center flex flex-wrap pr-2">
            <div>
              <p className="text-6xl font-black w-full text-black">Get Started</p>
              <SignUp/>
            </div>
          </div>
          <div className="w-1/2 h-200 pl-2">
            <img src={require('../../static/undraw_lightbulb_moment_evxr.svg')} alt="temp"></img>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}
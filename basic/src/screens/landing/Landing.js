import React from 'react'

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
            <img src={require('../../static/undraw_breakfast_psiw.svg')} alt="temp"></img>
          </div>
        </div>

      </div>

      <div className="flex flex-wrap w-full justify-center" style={bottomDiv}>
        <div className="w-3/4 flex flex-wrap  py-12 my-12">
          <div className="w-1/2 h-200 pl-2">
            <img src={require('../../static/undraw_lightbulb_moment_evxr.svg')} alt="temp"></img>
          </div>
        </div>
      </div>

      </div>

    </div>
  )
}
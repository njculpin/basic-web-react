import React, { useState } from 'react'
import Modal from 'react-responsive-modal';

export const ModalContext = React.createContext()
export function ModalProvider(props) {


  let [state, setState] = useState({
    show: false,
    message: '',
    title: '',
    buttonText: '',
    callback: null
  })

  const alert = (title, message, buttonText, callback) => {
    let next = state.show ? false : true
    setState({
      ...state,
      show: next,
      message,
      title,
      buttonText,
      callback
    })
  }



  return (
    <ModalContext.Provider
      value={{
        alert: (title, message, buttonText, callback) => alert(title, message, buttonText, callback)
      }}
    >
      {props.children}
      <Modal open={state.show} onClose={() => setState({ ...state, show: false })} center>
        <div className="w-full w-64 p-18 rounded flex flex-col justify-center items-center"
          style={{ height: '50vh' }}>
          <h2 className="text-center font-lato-regular mt-3 text-3xl">{state.title}</h2>
          <p className="font-lato-light text-xl mb-12 text-grey-dark font-medium my-3 text-center w-4/5 leading-normal">{state.message}</p>
          <button
            onClick={() => {
              setState({ show: false })
              if (state.callback) state.callback()
            }}
            className="w-64 h-12 font-brown-regular bg-red hover:bg-red-dark text-black font-bold py-2 px-4 rounded shadow">
            {state.buttonText}
          </button>
        </div>
      </Modal>
    </ModalContext.Provider>
  )
}

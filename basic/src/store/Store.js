import React, { useReducer, useEffect } from 'react'
import { StoreReducer } from './StoreReducer'
import { auth } from '../app/firebase'
import { getUser } from '../services'

export const Context = React.createContext()
export function Provider({ children }) {

  let [ state, dispatch ] = useReducer(StoreReducer, {
    loadingApp: true,
    user: {},
    authed: false
  })

  const initCards = async () => {
    if(state.loadingApp === false) return
    // dispatch({type: 'loadingCards', payload: true})
    try {
      // let Cards = await getCards()
      // dispatch({type: 'loadingCards', payload: false})
      dispatch({type: 'loadingApp', payload: false})
    } catch(e) {
      console.log(e)
      // dispatch({type: 'loadingCards', payload: false})
      dispatch({type: 'loadingApp', payload: false})
    }
  }

  useEffect(() => {
    dispatch({type: 'loadingApp', payload: true})
    let unsubscribe = auth.onAuthStateChanged(async user => {
      if (user && !user.isAnonymous) {
        let person =  await getUser(user.uid)
        dispatch({type: 'setAuthed', payload: true})
        dispatch({type: 'setUser', payload: person})
        await initCards()
      } else {
        dispatch({type: 'setAuthed', payload: false})
        // await auth.signInAnonymously()
        await initCards()
      }
    });
    return () => unsubscribe()
  }, [])

  return (
    <Context.Provider
      value={[state, dispatch]}
    >
      {children}
    </Context.Provider>
  )
}

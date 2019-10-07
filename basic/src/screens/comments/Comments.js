import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../store'
import { useEffectAsync } from '../../utils'
import { CommentsRow } from '../../components'
import { getComments } from '../../services'


export function Comments(props) {
  let ID = props.location.search.split('=')[1]
  let [dispatch] = useContext(Context)
  let [state, setState] = useState([])

  useEffectAsync(async () => {
    try {
      console.log(ID)
      let store = await getComments(ID)
      setState(store)
    } catch (e) {
      console.log(e)
    }
  }, [])


  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 px-12">
        <div className="mt-6">
          <h1>BASIC</h1>
          {state.map((story, index) =>
          <CommentsRow
          history={props.history}
          dispatch={dispatch}
          index={index}
          key={index}
          {...story} />
        )}
        </div>
      </div>
    </div>
  )
}

import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../store'
import { useEffectAsync } from '../../utils'
import { StoryRow } from '../../components'
import { getStories, getIndividualStory } from '../../services'

export function Landing(props) {
  let [dispatch] = useContext(Context)
  let [state, setState] = useState([])

  useEffectAsync(async () => {
    try {
      let store = await getIndividualStory()
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
          <StoryRow
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

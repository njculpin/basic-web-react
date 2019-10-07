import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../store'
import { useEffectAsync } from '../../utils'
import { ChildRow } from '../../components'
import { getComments } from '../../services'

export const CommentsRow = (props) => {

  let [state, setState] = useState([])

  useEffectAsync(async () => {
    try {
      let store = await getComments(props.data.id)
      setState(store)
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
      <div className="table table-fixed flex w-full border-b">
          <div className="table-row">
            <div className="table-cell px-4 pb-2 text-sm">{props.data.text}</div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2 px-12">
            {props.data.kids &&
              <div className="mt-6">
                {state.map((story, index) =>
                <ChildRow
                history={props.history}
                index={index}
                key={index}
                {...story} />
              )}</div>
            }
            </div>
          </div>
        </div>
  )
}

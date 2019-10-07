import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../store'
import { useEffectAsync } from '../../utils'
import { getComments } from '../../services'

export const ChildRow = (props) => {

  let [state, setState] = useState([])

  console.log(props)

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
      </div>
  )
}

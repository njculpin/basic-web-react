import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const StoryRow = (props) => {

  const goToID = () => {
    props.history.push({
      pathname:`/comments`,
      search:`?sort=${props.data.id}`
    })
  }

  return (
      <div className="table table-fixed flex w-full border-b">
          <div className="table-row">
            <div
            onClick={()=>goToID()}
            className="table-cell px-4 pb-2 text-sm">{props.data.title}</div>
          </div>
      </div>
  )
}

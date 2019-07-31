import React, { useContext, useEffect } from 'react'
import { Context } from '../../store'

export function SinglePage(props) {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 px-12">
        <div className="mt-6">
          <h1>Single Page</h1>
        </div>
      </div>
    </div>
  )
}

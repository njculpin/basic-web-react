import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

const Bar = (props) => {
  return (
    <div className="w-full z-10 bg-gray-100 p-8 px-6 flex flex-row justify-between items-center font-bold">
      <Link to="/"><p>Title</p></Link>
    </div>
  )
}

export const NavBar = withRouter(Bar)

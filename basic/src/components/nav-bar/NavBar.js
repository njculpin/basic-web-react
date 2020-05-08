import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

const Bar = (props) => {
  return (
    <div className="w-full z-10 bg-white p-4 px-6 flex flex-row justify-between items-center border-b border-grey">
      <Link to="/"><p>Basic Logo Placeholder</p></Link>
    </div>
  )
}

export const NavBar = withRouter(Bar)

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store'
import { withRouter } from "react-router";

const Bar = (props) => {
  let [ { authed, user } ] = useContext(Context)
  let history = props.location.pathname.split('/')[1]
  let blueLinkStyle = "font-lato text-blue text-sm inline no-underline ml-12 font-bold hover:underline"
  let linkStyle = "font-lato text-black text-xs md:text-sm inline no-underline ml-3 md:ml-12 font-medium hover:underline"

  function getLinkStyle(link){
    if (history === link) {
      return blueLinkStyle
    } else {
      return linkStyle
    }
  }

  function getLinkStyleBrowse(){
    if (history === "singlepage") {
      return blueLinkStyle
    } else {
      return linkStyle
    }
  }

  function getLinkStyleProfile(){
    // this could be refactoblue if all profile related screens had a prefix
    // use exact references to preclude errors
    if (history === "profile" ||
      history === "editprofile"
      ) {
        return blueLinkStyle
      } else {
        return linkStyle
      }
  }

  function ProfileButton(){
    if (authed && user && user.profileImage) {
      return (
        <div>
        <Link to="/profile">
          <img
          className="rounded-full h-12 w-12 ml-12"
          alt="profile"
          src={user.profileImage} />
        </Link>
        </div>
      )
    } else if (authed && user && !user.profileImage) {
      return (
        <div>
        <Link className={getLinkStyleProfile() + " hidden md:block"} to="/profile">Profile</Link>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className="w-full z-10 bg-white p-4 px-6 flex flex-row justify-between items-center border-b border-grey">
      <Link to="/"><img src={ require('../../static/logo-full.svg')} alt="Basic Logo"/></Link>
      <div className="flex flex-row justify-center items-center">

        <Link className={getLinkStyleBrowse()} to="/singlepage">Single Page Example</Link>

        {!authed && <Link className={getLinkStyle("login")} to="/login">Login</Link>}

        <ProfileButton/>

      </div>
    </div>
  )
}

export const NavBar = withRouter(Bar)

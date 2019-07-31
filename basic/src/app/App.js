import React, { useContext, Fragment } from 'react';
import '../css/tailwind.css';
import { Navigation } from './Navigation'
import { Context } from '../store'

function App() {
  let [{authed, loadingApp}] = useContext(Context)

  if(loadingApp) return (
    <div>

    </div>
  )

  return (
    <Fragment>
      <Navigation authed={authed} />
    </Fragment>
  )
}

export default App;

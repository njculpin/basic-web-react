import React, { useContext } from "react";
import { Context } from '../store'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  Login, Register, Landing, SinglePage, Comments
} from '../screens'
import { NavBar, Footer, ScrollToTop } from '../components'

export function Navigation (props) {
  return (
    <Router>
      <ScrollToTop>
        <div className="pb-24 bg-gray-100">
          <Switch>
          <Route
            exact path="/"
            component={Landing}
          />
          <Route
            exact path="/login"
            component={Login}
          />
          <Route
            exact path="/register"
            component={Register}
          />
          <Route
            path="/singlepage"
            component={SinglePage}
          />
          <Route
            path="/comments"
            component={Comments}
          />
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  )
}

export function PrivateRoute({ component: Component, ...rest }) {
  let [store] = useContext(Context)
  return (
    <Route
      {...rest}
      render={props =>
        store.authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  )
}

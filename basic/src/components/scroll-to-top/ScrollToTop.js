import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollUpToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  },[]);

  return <Fragment>{children}</Fragment>;
}

export const ScrollToTop = withRouter(ScrollUpToTop);

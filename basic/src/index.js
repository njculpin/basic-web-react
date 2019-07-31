import React from 'react';
import ReactDOM from 'react-dom';
import './app/firebase'
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Provider, ModalProvider } from './store'

ReactDOM.render(
  <ModalProvider>
    <Provider>
      <App />
    </Provider>
  </ModalProvider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

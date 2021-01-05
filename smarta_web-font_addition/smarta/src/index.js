import React from 'react';
import ReactDOM from 'react-dom';
import './Styling/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Creds from './Pages/SignUp_Flow/Credentials';
import '../src/Styling/index.css';


ReactDOM.render(
  <React.StrictMode>
      <Creds/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

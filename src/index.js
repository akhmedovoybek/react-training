import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost } from './redux/state.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
let appState = state;
addPost("Hello Oybek!")
root.render(
  <Router>
    <App state={appState} addPost={addPost}/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//https://github.com/akhmedovoybek/react-training.git

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, subscribe } from './redux/state.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { updateNewPostText } from './redux/state.js';
const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = (state) => {
  root.render(
    <Router>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </Router>
  );
};
let appState = state;
renderEntireTree(appState);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//https://github.com/akhmedovoybek/react-training.git

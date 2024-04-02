import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
  {id:1,message:'Hi, how are you?', likescount:23},
  {id:2, message:'It\'s my first post!', likescount:12}
]
let messages = [
  {id:1,message:'Hi!'},
  {id:2, message:'How are you?'}
]
root.render(
  <Router>
    <App posts={posts} messages={messages}/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

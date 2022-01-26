import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './components/App'
//import { createStore } from 'redux'
//import reducer from './reducers'
//import middleware from './middleware'
import LeaderBoard from "./components/LeaderBoard";

//const store = createStore(reducer, middleware)
const store = null;
ReactDOM.render(
    <div><LeaderBoard/></div>,
document.getElementById('root')
)
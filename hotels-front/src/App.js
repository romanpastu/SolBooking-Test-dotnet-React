import React from 'react';
import {  withRouter} from "react-router-dom";
import Router from "./router/Router"
import './App.css';

function App() {
  return (
    <div className="main-content">
        <div>
        <Router />
        </div>
      </div>
  );
}

export default withRouter(App);

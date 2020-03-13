import React from 'react';
import HomePage from "../../pages/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route path='/' component={HomePage} exact/>
        </Switch>
      </div>
    </div>
  );
}

export default App;

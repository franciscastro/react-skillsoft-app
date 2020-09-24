import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import EnterWeight from './components/enterweight';
import MyWeights from './components/myweights';
import TeamWeights from './components/teamweights';

//const location = <h2>Finland</h2>

function App() {

  return (
    <div>
      <BrowserRouter>

        <Route
          exact
          path="/"
          component={Home}
        />

        <Route
          path="/home"
          component={Home}
        />

        <Route
          path="/enterweight"
          component={EnterWeight}
        />

        <Route
          path="/myweights"
          component={MyWeights}
        />

        <Route
          path="/teamweights"
          component={TeamWeights}
        />

      </BrowserRouter>
    </div>
  );

}

export default App;

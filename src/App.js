import React, { Component } from 'react';
import './App.scss';
import { Route } from "react-router-dom";
import Landing from './features/Issues/Landing';
import Issues from './features/Issues/Issues';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/:owner/:repo" component={Issues} />
      </div>
    );
  }
}

export default App;

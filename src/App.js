import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.css';
import MainContainer from './containers/MainContainer/MainContainer';

import {ThemeContextProvider} from './contexts/ThemeContext'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <ThemeContextProvider>
            <MainContainer />
          </ThemeContextProvider>
        </Switch>
      </Router>
    );
  }
}

export default App;

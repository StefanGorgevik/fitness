import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.css';
import MainContainer from './containers/MainContainer/MainContainer';

import { ThemeContextProvider } from './contexts/ThemeContext'
import { MainContextProvider } from './contexts/MainContext'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <ThemeContextProvider>
            <MainContextProvider>
              <MainContainer />
            </MainContextProvider>
          </ThemeContextProvider>
        </Switch>
      </Router>
    );
  }
}

export default App;

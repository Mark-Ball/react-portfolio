import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import HomePage from '../pages/Home/Home';
import AboutPage from '../pages/About/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path = '/' component = {Navbar} />
        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/about' component = {AboutPage} />
      </BrowserRouter>
    )
  }
}

export default App;

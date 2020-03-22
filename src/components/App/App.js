import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from '../Navbar/Navbar';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import ProjectsPage from '../pages/Projects/ProjectsPage';
import ContactPage from '../pages/Contact/ContactPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/contact' component={ContactPage} />
      </BrowserRouter>
    )
  }
}

export default App;

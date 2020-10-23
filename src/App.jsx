import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from'./Navbar';
import {Route, Switch ,Redirect } from 'react-router-dom';
import Footer from './Footer';


const App = () => {
  return <>
  <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/service' component={Service}/>
      <Route exact path='/contact' component={Contact}/>
      <Route to='/'/>
     
    </Switch>
    <Footer/>
  </>;
};
export default App;
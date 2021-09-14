import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={Contact}/>
      <Home/>
      </Switch>
    </div>
  )
}

export default App;

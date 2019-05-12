import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
       <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

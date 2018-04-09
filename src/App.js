import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Home, About, Events, Products, Contact } from './src/components/pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

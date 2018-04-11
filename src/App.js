import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home, About, Events, Products, Contact } from './components/Pages/MainPages/pages';
import Error404 from './components/Pages/Error/Error404';
import PageTemplate from './components/Pages/PageTemplate';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <PageTemplate>
              <Route component={Error404} />
            </PageTemplate>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

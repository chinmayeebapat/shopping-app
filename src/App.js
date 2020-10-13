import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import browserHistory from './history/history';
import Next from './components/Next';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <Navbar />
          <section>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/next" component={Next} />
            </Switch>
          </section>
        </div>
      </Router>

    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SmartComponent from './SmartComponent'
import Users from './Users'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to={'/hello'}> Hello </Link>
            <Link to={'/world'}> world </Link>
            <Link to={'/smart'}> smart </Link>
            <Link to={'/users'}> Users </Link>

            <Route path={'/'} exact component={World} />
            <Route path={'/smart'} exact component={SmartComponent} />
            <Route path={'/hello'} exact component={Hello} />
            <Route path={'/world'} exact component={World} />
            <Route path={'/users'} exact component={Users} />
          </div>
        </Router>
      </div>
    );
  }
}

const World = function (props) {
  return <p>World</p>
}

const Hello = function (props) {
  return <p>Hello</p>
}

export default App;

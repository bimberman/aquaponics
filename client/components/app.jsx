
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MainView from './main-view';
import StatusView from './system-status-view';
import InventoryView from './fish-inventory-view';
import GraphsAndStatsView from './graphs-and-stats-view';
import Tasks from './tasks-view';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainView />
          </Route>
          <Route exact path="/controls">
            <StatusView />
          </Route>
          <Route exact path="/inventory">
            <InventoryView />
          </Route>
          <Route exact path="/graphs-and-stats">
            <GraphsAndStatsView />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </Router>
    );
  }
}

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CalendarMain from "./components/CalendarMain.1";
import TodoMain from './components/TodoMain';
import './App.css';

function App() {

  return (

    <Router>
      <nav>
        <span>Navbar</span>
        <button type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
        </button>
        <div id="navbarNavAltMarkup">
          <div>
            <Link to="/todo">Todo</Link>
            <Link to="/calendar">Calendar</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/todo">
          <TodoMain />
        </Route>
        <Route path="/calendar">
          <CalendarMain />
        </Route>
      </Switch>

    </Router >

  );

}

export default App;

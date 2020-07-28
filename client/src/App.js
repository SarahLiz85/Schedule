import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Display from './components/display';
import ScheduleForm from './components/newform';
import ScheduleEdit from './components/editform';



function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Schedule</h1>
      </div>
      <Link className="btn btn-outline-info" to="/">Schedule</Link>
      <Link className="btn btn-outline-info" to="/new">New Activity</Link>
      <Router>
      <Display path="/" />
      <ScheduleForm path="/new" />
      <ScheduleEdit path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

// import Display from './components/Display'
import Home from './components/Home'
import Display from './components/Display';
import Form from './components/Form'
import { useState } from 'react';
import DisplayStar from './components/DisplayStar';


function App() {

  return (
      <div className="App">
        <Router>
          <Form/>
          <Route path="/:type?/:id?" component={DisplayStar}/>
        </Router>
      </div>

  );
}

export default App;

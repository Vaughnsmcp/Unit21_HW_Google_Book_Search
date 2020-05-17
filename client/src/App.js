import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Save from './pages/Save'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/save" component={Save} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;

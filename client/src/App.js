import React from '../node_modules/@types/react';
import logo from './logo.svg';
import Footer from './components/Footer'
import './App.css';
import { Router, Route, Switch } from "../node_modules/react-router-dom"
import NavBar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>


          <Route component={Home} />
          {/* <Route exact path="/saved" component={Save}/> */}
        </Switch>
      </div>
    </Router>

    // {/* <Footer></Footer> */}
  );
}

export default App;
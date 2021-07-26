import './App.css';
import { Fragment } from 'react';
import Navbar from "./Components/Navbar"
import SingIn from './Components/SingIn';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from './Pages/home/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <SingIn/>
      </Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;

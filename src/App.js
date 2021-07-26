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
    <>
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/signIn">
                <SingIn />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
       </Router>
    </>
  );
}

export default App;

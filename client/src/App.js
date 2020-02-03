import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute.js";
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import RentalEvaluationForm from './components/RentalEvaluationForm';

function App() {
  const [pong, setPong] = useState("")

  useEffect(() => {
    const pingPong = async () => {
      try {
        const { data } = await axios('/ping')
        setPong(data.pong)
        console.log('state.pong', pong)
      } catch (e) {
        console.log(e)
      }
    }
    pingPong()
  }, [])
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <p>
            {pong ? pong : "backend not pinging"}
          </p>

        </header>
        <Route exact path="/" component={Login} />
        <Route path="/rentalevaluation" component={RentalEvaluationForm} />
      </div>
    </Router>
  );
}

export default App;

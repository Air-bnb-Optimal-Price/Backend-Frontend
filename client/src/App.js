import React, { useEffect, useState } from 'react';
import PrivateRoute from "./components/PrivateRoute.js";
import RegisterLogin from "./components/RegisterLoginSection/RegisterLoginContainer/RegisterLogin";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { Header } from './components/Header/Header';
import RentalEvaluationForm from './components/RentalEvaluationForm';
import Login from './components/RegisterLoginSection/LoginContainer/Login'
import Register from './components/RegisterLoginSection/RegisterContainer/Register'

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={RentalEvaluationForm} />
      </Switch>
    </div>
  );
}

export default App;

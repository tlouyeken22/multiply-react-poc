import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import RegisterPage from './pages/register/RegisterPage'
import HomePage from './pages/HomePage';
import ErrorPage from "./pages/ErrorPage";
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/register" component={RegisterPage} />
          <Route path="/home" component={HomePage} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
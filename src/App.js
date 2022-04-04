import React from "react";
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <header className = 'header'>
        <div className = 'banner'>
        <h1>Lambda Eats</h1>
        <h3>Coding food for you since 2022</h3>
        <nav className = 'banner-nav'>
          <Link to='/pizza-form'>Pizza Order</Link>
          <a href='https://www.youtube.com/watch?v=O0wOD9TWynM'>Help</a>
        </nav>
        </div>
      </header>
    {
    <Switch>
      <Route path ='/pizza-form'>
        <Form />
      </Route>
      <Route path ='/'>
          <Home />
      </Route>
      </Switch>
    }
    </>
  );
};
export default App;

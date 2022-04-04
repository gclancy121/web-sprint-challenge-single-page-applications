import React, {useState, useEffect} from "react";
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';



//this sets up the updating of the form in real time
const initialNameValue = '';


const App = () => {
  
const [nameValue, setNameValue] = useState(initialNameValue);

const onChange = evt => {
  const value = evt.target;
  setNameValue(value)
}

  return (
    <>
      <header className = 'header'>
        <div className = 'banner'>
        <h1>Lambda Eats</h1>
        <h3>Coding food for you since 2022</h3>
        <nav className = 'banner-nav'>
          <Link to='/pizza'>Pizza Order</Link>
          <a href='https://www.youtube.com/watch?v=O0wOD9TWynM'>Help</a>
        </nav>
        </div>
      </header>
    {
      // this sets up the webpage in a way that works, if you add more at it to the top otherwise everything burns
    <Switch>
      <Route path ='/pizza'>
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

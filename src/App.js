import React, {useState} from "react";
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import * as yup from "yup";
import schema from "./validation/formSchema";
import axios from 'axios';



//this sets up the updating of the form in real time
const initialFormValues = {
  name: '',
  size: '',
  sausage: false,
  pepperoni: false,
  ham: false,
  bacon: false,
  specialText: ''
}
const initialErrors = {
  name: '',
};
const initialOrders = [];
const App = () => {

const [orders, setOrders] = useState(initialOrders);
const [formValues, setFormValues] = useState(initialFormValues);
const [errorValues, setErrorValues] = useState(initialErrors);

const postPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res => {
    setOrders([res.data, ...orders]);
  }).catch(err => console.error(err))
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
      .then(() => setErrorValues({ ...errorValues, [name]: "" }))
      .catch(err => setErrorValues({ ...errorValues, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues,[name]: value })

}




const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: ['sausage, pepperoni, bacon, ham'].filter(topping => !!formValues[topping]),
    specialtext: formValues.specialText.trim(),
  }
  postPizza(newOrder);
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
        <Form 
        values={formValues}
        update={inputChange}
        submit={formSubmit}
        errors={errorValues}
        />
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

import React from "react";
import './App.css';


const App = () => {
  return (
    <>
      <header className = 'header'>
        <div className = 'banner'>
        <h1>Lambda Eats</h1>
        <h3>Coding food for you since 2022</h3>
        </div>
        <nav className = 'header-nav'>
          <a href='https://www.google.com'>Pizza Order</a>
          <a href='https://www.w3schools.com/howto/howto_js_topnav.asp'>Help</a>
        </nav>
      </header>
      <div className = 'pizza-time'>
        <h1>Get pizza delivered while you code</h1>
        <a>Pizza?</a>
      </div>
    </>
  );
};
export default App;

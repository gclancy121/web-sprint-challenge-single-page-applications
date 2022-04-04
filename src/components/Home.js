import React from 'react';
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    const routeToPizza = () => {
        history.push('/pizza-form');
    }

    return (
        <div className = 'pizza-time'>
        <h1>Get pizza delivered while you code</h1>
        <button id='order-pizza' onClick={routeToPizza}>Pizza?</button>
      </div>
    )
}

export default Home;
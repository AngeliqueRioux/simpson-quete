import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
const [quote, setQuote] = useState('')
const [count, setCount] = useState(0)

useEffect(() => {

  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')

    .then((res) => {
      setQuote(res.data[0]);
      console.log(res)
    });
}, [count]);

  return (
    <div className="App">
        <img src={quote.image} alt='simpson' />
        <p>{quote.quote}</p>
        <p>{quote.character}</p>
         <button onClick={() => setCount(prevCount => prevCount + 1)}> Changer la citation</button>
    </div>
  );
}

export default App;

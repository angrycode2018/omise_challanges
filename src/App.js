import React, { useState, useEffect } from 'react';
import JsonServer from './services/JsonServer';
import Posts from './components/posts/Posts';
import './App.css';

const api = new JsonServer();

function App() {
  
  const [charities, setCharity] = useState([]);
  // const [payments, setPayment] = useState([]);
  useEffect( () => { 
    api.get('charities')
    .then( data => data ? setCharity(data): false )
      .catch(err => console.error('api.get: No response from Json-server!', err));
    // api.get('payments')
    // .then(data => setPayment(data))
    //   .catch(err => console.log(`Error API Payments:`, err));
  },[]);

  
  return (
      <div className="App">
        <header>{'OMISE CHALLANGES'}</header>
        <Posts  charities={charities} />
      </div>
  );
}

export default App;

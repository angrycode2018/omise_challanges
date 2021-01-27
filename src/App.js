import React, { useState, useEffect } from 'react';
import API from './API';
import Posts from './posts/Posts'
import './App.css';


function App() {
  
  const [title, setTitle]  = useState('App Title');
  const [charities, setCharity] = useState([]);
  const [payments, setPayment] = useState([]);
  const message = 'This is massage from App component.';
  
  useEffect( () => { 
    const api = new API();
    api.get('charities').then( data => setCharity(data)).catch(err => console.log(err));
    api.get('payments').then(data => setPayment(data)).catch(err => console.log(`Error API Payments:`, err));
  }, []);

  const play = () => {
    setTimeout(()=>{ setTitle('New App Title is set!') }, 3000);
    document.title = `You clicked  times`;
  }

  
  return (
    <div className="App">
      <header>{title}</header>
        <Posts message={message} charities={charities} payments={payments}/>
    </div>
  );
}

export default App;

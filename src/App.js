import React, { useState, useEffect } from 'react';
import JsonServer from './services/JsonServer';
import Posts from './components/posts/Posts';
// import PaymentContext from './PaymentContext';
import './App.css';

// const {Consumer, Provider} = React.createContext()
const api = new JsonServer();
// console.log('PaymentContext:', Consumer)


function App() {
  
  const [charities, setCharity] = useState([]);
  const [payments, setPayment] = useState([]);
  // const data = useContext(PaymentContext);
  const message = 'This is massage from App component.';

  
  useEffect( () => { 
    api.get('charities')
    .then( data => setCharity(data))
      .catch(err => console.log(err));

    // api.get('payments')
    // .then(data => setPayment(data))
    //   .catch(err => console.log(`Error API Payments:`, err));

  },[]);

  
  return (
   
      <div className="App">
        <header>{'OMISE CHALLANGES'}</header>
        <Posts message={message} charities={charities} />
      </div>

  );
}

export default App;

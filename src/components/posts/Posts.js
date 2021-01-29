import React, {useEffect, useState} from 'react'
import PostItem from './post-item/PostItem'
import JsonServer from '../../services/JsonServer'

export default function Posts({ charities } ) {

  const [payments, setPayments] = useState([])

  useEffect( () => {
    const api = new JsonServer()
    api.get('payments').then(data => setPayments(data) ).catch(error => console.error('Fail to Get Payments: ', error))
  }, [])

    const showCharities = () => {
        return charities.map( (item, index) => 
           (
                <PostItem 
                payments={payments}
                setPayments={setPayments} 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                currency={item.currency} 
                />
            )
        ); 
      }


    return (
    <div className="Post">
        {showCharities()}
    </div>
    )
}

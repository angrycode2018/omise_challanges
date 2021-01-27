import React from 'react'
import PostItem from './post-item/PostItem'

export default function Posts(props) {
    const {message, charities, payments} = props
    const title = 'Posts Component'

    const showCharities = () => {
        return charities.map( (item, index) => {
          return (
                <PostItem key={item.id} id={item.id} name={item.name} image={item.image} currency={item.currency} />
            )
        }); 
      }
    
    
      const showPayments = () => {
        return payments.map( (item, index) => {
          return (<div key={index}>
              <div>charitiesId: {item.charitiesId}</div>
              <div>Amount: {item.amount}</div>
              <div>Currency: {item.currency}</div>
              <div>Id: {item.id}</div>
            </div>)
        }); 
      }


    return (
    <div className="Post" style={{border: "2px solid red"}}>
        <h4>{title}</h4>
        <h4>{message}</h4>
        {showCharities()}
    </div>
    )
}

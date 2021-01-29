import React from 'react'
import PostItem from './post-item/PostItem'

export default function Posts({ charities, payments} ) {

    const showCharities = () => {
        return charities.map( (item, index) => 
           (
                <PostItem key={item.id} id={item.id} name={item.name} image={item.image} currency={item.currency} />
            )
        ); 
      }


    return (
    <div className="Post">
        {showCharities()}
    </div>
    )
}

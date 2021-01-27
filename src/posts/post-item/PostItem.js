import React from 'react'

export default function PostItem(props) {
    const {id, name, image, currency} = props
    const title = 'Post Item Component'


    return ( 
        <div className="Post__item">
            <header className="Post__title">{name}</header>
            <img className="Post__image" src={`./images/${image}`}/>
        </div>
    )
}

// src={`https://source.unsplash.com/random?sig=${id}`}
import React from 'react'

export default function PostItem(props) {
    const {id, name, image, currency} = props
    const title = 'Post Item Component'


    return ( 
        <div className="Post__item">
            <div className="Post__title">{name}</div>
            <img className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`}/>
        </div>
    )
}
import React from 'react'

export default function PostItem(props) {
    const {id, name, image, currency} = props
    const title = 'Post Item Component'


    return ( 
        <div className="Post__item" style={{backgroundColor: "pink"}}>
            <h4>{name}</h4>
            <img className="Post__image" src={`https://source.unsplash.com/random?sig=${id}`}/>
        </div>
    )
}
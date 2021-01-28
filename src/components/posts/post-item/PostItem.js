import React, { useState } from 'react'
import Button from '../../button/Button'
import PostDonate from '../post-donate/PostDonate'

export default function PostItem(props) {
    const {id, name, image, currency} = props
    const [hidden, setHidden] = useState(true)

    return ( 
        <div className="Post__item">
            <header className="Post__title">
                <Button onClick={()=>setHidden(false)}/>
                {name}
            </header>
            <div className={`Post__donate ${hidden ? 'hide' : ''}`} onMouseLeave={()=>setHidden(true)}>
                <button type="button" className="Btn__close" onClick={()=>setHidden(true)}>X</button>
                <div className="Post__donate__content">
                    <PostDonate />
                </div>
            </div>
            <img className="Post__image" src={`./images/${image}`}/>
        </div>
    )
}

// src={`https://source.unsplash.com/random?sig=${id}`}
//<button className="Button__donate">Donate</button>
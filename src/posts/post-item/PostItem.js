import React, { useState } from 'react'
import Button from '../../button/Button'

export default function PostItem(props) {
    const {id, name, image, currency} = props
    const [hidden, setHidden] = useState(true)

    return ( 
        <div className="Post__item">
            <header className="Post__title">
                {name}
                <Button onClick={()=>setHidden(false)}/>
            </header>
            <div className={`Post__donate ${hidden ? 'hide' : ''}`} onMouseLeave={()=>setHidden(true)}>
                This content is hidden.
                <button type="button" className="Btn__close" onClick={()=>setHidden(true)}>X</button>
            </div>
            <img className="Post__image" src={`./images/${image}`}/>
        </div>
    )
}

// src={`https://source.unsplash.com/random?sig=${id}`}
//<button className="Button__donate">Donate</button>
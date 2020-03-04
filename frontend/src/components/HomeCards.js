import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/homecard.css'

export default function HomeCard(
    {picture,title,gh,bh,web,description,origindate}) {
    return (
        <>
            <div className="wrapercardHome">
                <div className="cardHome">
                    <div className="imagesection">
                        <img src={picture} alt={title} />
                    </div>
                    <div className="infowrap">
                        <h1>{title}</h1>
                        <p>{description}</p>
                            <div className="spanContainer">
                                <span>{gh}</span>
                                <span>{bh}</span>
                                <span>{web}</span>
                                <span>{origindate}</span>
                            </div>
                            <Link className="linkhome" >a</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

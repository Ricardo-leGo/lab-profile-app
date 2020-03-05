import React from 'react'
import { Link } from 'react-router-dom'
import {getoneproy,postoneproy } from '../services/getHomeService'

import style from '../styles/homecard.css'

export default function HomeCard(
    {picture,title,gh,bh,web,description,origindate,idproyect}) {
            let result = {}
                const  redirect = async ({target})=>{
                   result= await postoneproy(target.id)
                }

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
                            <Link className="linkhome" id={idproyect} onClick={redirect} to={`/${idproyect}`} >-></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

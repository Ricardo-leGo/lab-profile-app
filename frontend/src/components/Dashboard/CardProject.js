import React from 'react'
import '../../styles/cardProject.css'

export default function CardProject(
    {picture,title,gh,bh,web,description,origindate}) {
    return (
        <div className="cardProject">
            <h1>{title}</h1>
            <img src={picture} alt={title} />
            <p>{description}</p>
            <div className="spanContainer">
            <span>{gh}</span>
            <span>{bh}</span>
            <span>{web}</span>
            <span>{origindate}</span>
            </div>

        </div>
    )
}

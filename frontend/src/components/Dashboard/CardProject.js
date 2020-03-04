import React from 'react'
import '../../styles/cardProject.css'
import {deleteproy}  from '../../services/deleteproy'



export default function CardProject(
    {picture,title,gh,bh,web,description,origindate,idproy}) {


        const delElement = ( e ) =>{
            console.log(e.target.id);

            deleteproy(e).then(res=>res).catch((err) => err)
        }
        
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
            <p id={idproy} onClick={delElement} className="deleteElemnet">Delete</p>

            </div>

        </div>
    )
}
